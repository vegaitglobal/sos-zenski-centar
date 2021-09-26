using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
	public class ReportsService : IReportService
	{
		private readonly ICategoryService _categoryService;
		private readonly IEntryService _entryService;
		private readonly IAnswerService _answerService;
		private readonly IQuestionService _questionService;

		public ReportsService(ICategoryService categoryService, IEntryService entryService, IAnswerService answerService, IQuestionService questionService)
		{
			_categoryService = categoryService;
			_entryService = entryService;
			_answerService = answerService;
			_questionService = questionService;
		}

        public IEnumerable<GraphDto> GetGraphs(DateTime From, DateTime To)
        {
            GraphDto FirstGraph = _getFirstGraph(From, To);
            List<GraphDto> RetList = new List<GraphDto>
            {
                FirstGraph
            };
            return RetList;
        }

        private GraphDto _getFirstGraph(DateTime From, DateTime To)
        {
            Dictionary<string, int> Cache = new Dictionary<string, int>();
            GraphDto Graph;
            IEnumerable<Contracts.Dtos.Categories.CategoryInfoDto> Categories = _categoryService.GetAll();
            Graph = new GraphDto
            {
                Label = "Broj korisnika/ca po uslugama"
            };
            foreach (Contracts.Dtos.Categories.CategoryInfoDto Category in Categories)
            {
                Cache.Add(Category.Label, 0);
            }

            IEnumerable<Domain.Models.Entry> Entries = _entryService.GetInRange(From, To);
            foreach (Domain.Models.Entry Entry in Entries)
            {
                int OldCount = Cache[Entry.Category.Name];
                int NewCount = OldCount + 1;
                Cache[Entry.Category.Name] = NewCount;
            }
            List<GraphSliceDto> Data = new List<GraphSliceDto>();
            foreach (KeyValuePair<string, int> Item in Cache)
            {
                GraphSliceDto Dto = new GraphSliceDto
                {
                    Label = Item.Key,
                    Level = Item.Value.ToString()
                };
                Data.Add(Dto);
            }
            Graph.Data = Data;
            return Graph;
        }

        public IEnumerable<Table> GetTableReport(DateTime From, DateTime To)
		{
			var categoryInfoDtos = _categoryService.GetAll();
			var dataHeading = new List<string>(categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Label));
			dataHeading.Insert(0, "Kategorija");

			var dataRows = new List<List<string>>
			{
				new List<string>
				{
					"Broj klijenata/kinja",
				}
			};
			foreach (var item in categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Id))
			{
				var entriesCount = _entryService.GetAllForCategoryId(item, From, To).Count();
				dataRows[0].Append(entriesCount.ToString());
			}

			var tableRow = CreateTableRow(dataHeading, dataRows);
			var table = CreateTable("3.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama", new List<TableRow>
			{
				tableRow
			});
			// -----------------------------

			var dataHeading2 = new List<string>();
			var question = _questionService.GetByName("Odnos sa nasilnikom");
			var answers = question.Answers;

			var firstDataHeading = new List<string>(answers.Select(answer => answer.Text));
			firstDataHeading.Insert(0, "Kategorija");

			var firstDataRow = new List<string>
			{
				"Frekvencija"
			};

			var allEntries = _entryService.GetAllForQuestionName("Odnos sa nasilnikom", From, To);
			var totalAnswerCount = 0;
			foreach (var id in _answerService.GetAllIdsForQuestion(allEntries.FirstOrDefault()?.SubmitedAnswers.FirstOrDefault()?.Question))
			{
				var answerCount = allEntries.Where(entry => entry.SubmitedAnswers.Where(submitedAnswer => submitedAnswer.Answer.Id == id).Any()).Count();
				firstDataRow.Add(answerCount.ToString());
				totalAnswerCount += answerCount;
			}

			var secondDataRow = new List<string>
			{
				"Procenti"
			};

			for (int i = 1; i < firstDataRow.Count; i++)
			{
				secondDataRow.Add($"{(int.Parse(firstDataRow[i]) / (float)totalAnswerCount) * 100}%");
			}

			var allDataRows = new List<List<string>>
			{
				firstDataRow,
				secondDataRow
			};

			var tableRow2 = CreateTableRow(firstDataHeading, allDataRows);
			var table2 = CreateTable("3.2. Odnos žrtve sa nasilnikom", new List<TableRow>
			{
				tableRow2
			});

			return new List<Table>
			{
				table,
				table2
			};
		}

		private TableRow CreateTableRow(IEnumerable<string> dataHeading, IEnumerable<IEnumerable<string>> dataRows)
		{
			return new TableRow
			{
				Headings = dataHeading,
				Data = dataRows
			};
		}

		private Table CreateTable(string title, IEnumerable<TableRow> tableRows)
		{
			return new Table
			{
				Title = title,
				Data = tableRows
			};
		}
	}
}
