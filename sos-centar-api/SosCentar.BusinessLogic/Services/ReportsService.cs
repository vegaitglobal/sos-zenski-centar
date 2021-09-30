using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class ReportsService : IReportService
    {
        private readonly ICategoryService _categoryService;
        private readonly IQuestionRepository _questionRepository;
        private readonly IEntryRepository _entryRepository;

        public ReportsService(ICategoryService categoryService, IQuestionRepository questionRepository, IEntryRepository entryRepository)
        {
            _categoryService = categoryService;
            _questionRepository = questionRepository;
            _entryRepository = entryRepository;
        }

        public IEnumerable<GraphDto> GetGraphs(DateTime from, DateTime to)
        {
            GraphDto firstGraph = GetFirstGraph(from, to);
            GraphDto secondGraph = GetSecondGraph(from, to);
            List<GraphDto> retList = new List<GraphDto>
            {
                firstGraph, secondGraph
            };
            return retList;
        }

        private GraphDto GetFirstGraph(DateTime from, DateTime to)
        {
            Dictionary<string, int> cache = new Dictionary<string, int>();
            GraphDto graph;
            IEnumerable<Contracts.Dtos.Categories.CategoryInfoDto> categories = _categoryService.GetAll();
            graph = new GraphDto
            {
                Label = "Broj korisnika/ca po uslugama"
            };
            foreach (Contracts.Dtos.Categories.CategoryInfoDto category in categories)
            {
                cache.Add(category.Label, 0);
            }

            IEnumerable<Entry> entries = _entryRepository.GetInRange(from, to);
            foreach (Entry entry in entries)
            {
                int OldCount = cache[entry.Category.Name];
                int NewCount = OldCount + 1;
                cache[entry.Category.Name] = NewCount;
            }
            List<GraphSliceDto> data = new List<GraphSliceDto>();
            foreach (KeyValuePair<string, int> Item in cache)
            {
                GraphSliceDto Dto = new GraphSliceDto
                {
                    Label = Item.Key,
                    Level = Item.Value.ToString()
                };
                data.Add(Dto);
            }
            graph.Data = data;
            return graph;
        }

        private GraphDto GetSecondGraph(DateTime from, DateTime to)
        {
            Dictionary<string, int> cache = new Dictionary<string, int>();
            var dto = new GraphDto();
            var questionText = "Pripadnost marginalizovanim grupama";
            dto.Label = questionText;
            var questions = _questionRepository.GetByName(questionText).ToList();
            foreach (var answer in questions?.First()?.Answers ?? new List<Answer>())
            {
                cache[answer.Text] = 0;
            }

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            foreach (var entry in allEntries)
            {
                foreach (var submitedAnswer in entry.SubmitedAnswers)
                {
                    if (submitedAnswer.Question.Text == questionText)
                    {
                        var text = submitedAnswer.Answer.Text;
                        int OldCount = cache[text];
                        int NewCount = OldCount + 1;
                        cache[text] = NewCount;
                    }

                }
            }

            List<GraphSliceDto> data = new List<GraphSliceDto>();
            foreach (KeyValuePair<string, int> item in cache)
            {
                GraphSliceDto Dto = new GraphSliceDto
                {
                    Label = item.Key,
                    Level = item.Value.ToString()
                };
                data.Add(Dto);
            }
            dto.Data = data;
            return dto;

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
                var entriesCount = _entryRepository.GetInRangeForCategoryId(item, From, To).Count();
                dataRows[0].Add(entriesCount.ToString());
            }

            var tableRow = CreateTableRow(dataHeading, dataRows);
            var table = CreateTable("3.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama", new List<TableRow>
            {
                tableRow
            });
            // -----------------------------

            var dataHeading2 = new List<string>();
            var questions = _questionRepository.GetByName("Odnos sa nasilnikom");
            var question = questions.First();
            var answers = question.Answers;

            var firstDataHeading = new List<string>(answers.Select(answer => answer.Text));
            firstDataHeading.Insert(0, "Kategorija");

            var firstDataRow = new List<string>
            {
                "Frekvencija"
            };

            var allEntries = _entryRepository.GetInRangeForQuestionName(question.Text, From, To).ToList();
            var totalAnswerCount = 0;

            foreach (var answer in answers)
            {
                var answerCount = allEntries.Where(entry => entry.SubmitedAnswers.Where(submitedAnswer => submitedAnswer.Answer.Text == answer.Text).Any()).Count();
                firstDataRow.Add(answerCount.ToString());
                totalAnswerCount += answerCount;
            }

            var secondDataRow = new List<string>
            {
                "Procenti"
            };

            for (int i = 1; i < firstDataRow.Count; i++)
            {
                var percentage = float.Parse(firstDataRow[i]) / totalAnswerCount * 100;
                secondDataRow.Add($"{(float.IsNaN(percentage) ? 0 : percentage):f2}%");
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
