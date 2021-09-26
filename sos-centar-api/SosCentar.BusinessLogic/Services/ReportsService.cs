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

        public ReportsService(ICategoryService categoryService, IEntryService entryService, IAnswerService answerService)
        {
            _categoryService = categoryService;
            _entryService = entryService;
            _answerService = answerService;
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

        public IEnumerable<Table> GetTableReport()
        {
            IEnumerable<Contracts.Dtos.Categories.CategoryInfoDto> categoryInfoDtos = _categoryService.GetAll();

            List<string> headings = new List<string>(categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Label));
            headings.Insert(0, "Kategorija");

            TableRow firstTableRow = new TableRow
            {
                Headings = headings
            };

            List<string> row = new List<string>
            {
                "Broj klijenata/kinja",
            };
            foreach (Guid item in categoryInfoDtos.Select(categoryInfoDto => categoryInfoDto.Id))
            {
                int entriesCount = _entryService.GetAllForCategoryId(item).Count();
                row.Append(entriesCount.ToString());
            }

            firstTableRow.Data = new List<List<string>>
            {
                row
            };

            Table firstTable = new Table
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

            IEnumerable<Domain.Models.Entry> allEntries = _entryService.GetAllForQuestionName("Odnos sa nasilnikom");
            int totalAnswerCount = 0;
            foreach (Guid id in _answerService.GetAllIdsForQuestion(allEntries.FirstOrDefault()?.SubmitedAnswers.FirstOrDefault()?.Question))
            {
                int answerCount = allEntries.Where(entry => entry.SubmitedAnswers.Where(submitedAnswer => submitedAnswer.Answer.Id == id).Any()).Count();
                headings.Add(answerCount.ToString());
                totalAnswerCount += answerCount;
            }
            Table secondTable = new Table
            {
                Title = "3.2. Odnos žrtve sa nasilnikom"
            };
            secondTable.Data = new List<TableRow>
            {

            };

            List<Table> tables = new List<Table>{
                firstTable
            };
            return tables;
        }
    }
}
