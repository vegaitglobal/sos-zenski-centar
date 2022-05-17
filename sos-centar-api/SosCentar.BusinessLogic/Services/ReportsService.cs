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
    }
}
