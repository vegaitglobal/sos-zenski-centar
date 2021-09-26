using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;
using System;
using SosCentar.Contracts.Interfaces.Repositories;
using System.Collections.Generic;

namespace SosCentar.BusinessLogic.Services
{
	public class ReportsService : IReportService
	{
		private readonly CategoryService _categoryService;
		private readonly IEntryService _entryService;
		private readonly IAnswerService _answerService;

		public ReportsService(CategoryService categoryService, IEntryService entryService, IAnswerService answerService)
		{
			_categoryService = categoryService;
			_entryService = entryService;
			_answerService = answerService;
		}

		public object GetGraphs()
		{
			_entryService = entryService;
			_categoryService = categoryService;
		}

		public IEnumerable<GraphDto> GetGraphs(DateTime From, DateTime To)
        {
            List<GraphDto> retList;
            var FirstGraph = _getFirstGraph(From, To);
            var RetList = new List<GraphDto>();
            RetList.Add(FirstGraph);
            return RetList;
        }

        private GraphDto _getFirstGraph(DateTime From, DateTime To)
        {
            var Cache = new Dictionary<string, int>();
            GraphDto Graph;
            var Categories = _categoryService.GetAll();
            Graph = new GraphDto();
            Graph.Label = "Broj korisnika/ca po uslugama";
            foreach (var Category in Categories)
            {
                Cache.Add(Category.Label, 0);
            }

            var Entries = _entryService.GetInRange(From, To);
            foreach (var Entry in Entries)
            {
                var OldCount = Cache[Entry.Category.Name];
                var NewCount = OldCount + 1;
                Cache[Entry.Category.Name] = NewCount;
            }
            var Data = new List<GraphSliceDto>();
            foreach (var Item in Cache)
            {
                var Dto = new GraphSliceDto();
                Dto.Label = Item.Key;
                Dto.Level = Item.Value.ToString();
                Data.Add(Dto);
            }
            Graph.Data = Data;
            return Graph;
        }

        public Table GetTableReport()
		{
			var categoryInfoDtos = _categoryService.GetAll();
			
			var headings = new List<string>(categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Label));
			headings.Insert(0, "Kategorija");

			var firstTableRow = new TableRow
			{
				Headings = headings
			};

			var row = new List<string>
			{
				"Broj klijenata/kinja",
			};
			foreach (var item in categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Id))
			{
				var entriesCount = _entryService.GetAllForCategoryId(item).Count();
				row.Append(entriesCount.ToString());
			}

			firstTableRow.Data = new List<List<string>>
			{
				row
			};

			var firstTable = new Table
			{
				Title = "3.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama"
			};
			firstTable.Data = new List<TableRow>
			{
				firstTableRow
			};

			headings = new List<string>
			{
				"Frekvencija"
			};

			var allEntries = _entryService.GetAllForQuestionName("Odnos sa nasilnikom");
			var totalAnswerCount = 0;
			foreach (var id in _answerService.GetAllIdsForQuestion(allEntries.FirstOrDefault()?.SubmitedAnswers.FirstOrDefault()?.Question))
			{
				var answerCount = allEntries.Where(entry => entry.SubmitedAnswers.Where(submitedAnswer => submitedAnswer.Answer.Id == id).Any()).Count();
				headings.Add(answerCount.ToString());
				totalAnswerCount += answerCount;
			}
			var secondTable = new Table
			{
				Title = "3.2. Odnos žrtve sa nasilnikom"
			};
			secondTable.Data = new List<TableRow>
			{

			};

			var tables = new List<Table>{
				firstTable
			};
			return tables;
		}
	}
}
