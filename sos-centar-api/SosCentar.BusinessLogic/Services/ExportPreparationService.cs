using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportPreparationService : IExportPreparationService
    {
        private readonly ICategoryService _categoryService;
        private readonly IQuestionRepository _questionRepository;
        private readonly IEntryRepository _entryRepository;

        public ExportPreparationService(ICategoryService categoryService, IQuestionRepository questionRepository, IEntryRepository entryRepository)
        {
            _categoryService = categoryService;
            _questionRepository = questionRepository;
            _entryRepository = entryRepository;
        }

        public ExportTableDto GetUsersCountPerCategory(DateTime from, DateTime to, string title)
        {
            var allCategories = _categoryService.GetAll();

            var headings = new List<string>() { "Kategorije" };
            headings.AddRange(allCategories.Select(category => category.Label));

            var countRow = new List<string>() { "Frekvencija" };
            var rows = new List<IEnumerable<string>>() { countRow };

            var allEntries = _entryRepository.GetInRange(from, to);
            var counts = allCategories.Select(category => allEntries.Count(entry => entry.Category.Name == category.Label).ToString());
            countRow.AddRange(counts);

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }

        public ExportTableDto GetReportPerAnswerOnQuestion(DateTime from, DateTime to, string title, string questionText, bool includeTotalColumn = false)
        {
            var question = _questionRepository.GetByName(questionText).First();

            var headings = new List<string>() { "" };
            headings.AddRange(question.Answers.Select(answer => answer.Text));

            var countRow = new List<string>() { "Frekvencija" };
            var percentageRow = new List<string>() { "Procenti" };

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            var totalCount = 0;
            foreach (var answer in question.Answers)
            {
                var count = allEntries.Count(entry => entry.SubmitedAnswers.Any(sa => sa.Question.Text == questionText && sa.Answer.Text == answer.Text));
                countRow.Add(count.ToString());
                totalCount += count;
            }

            for (int i = 1; i < countRow.Count; i++)
            {
                var percentage = float.Parse(countRow[i]) * 100 / totalCount;
                percentageRow.Add($"{(float.IsNaN(percentage) ? 0 : percentage):f2}%");
            }

            if (includeTotalColumn)
            {
                headings.Add("Ukupno");
                countRow.Add(totalCount.ToString());
                percentageRow.Add("100%");
            }

            var rows = new List<IEnumerable<string>> { countRow, percentageRow };

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }

        public ExportTableDto GetReportPerAnswerOnQuestionPerCategory(DateTime from, DateTime to, string title, string questionText, bool includeTotalColumn = false)
        {
            var question = _questionRepository.GetByName(questionText).First();
            var allCategories = _categoryService.GetAll();

            var headings = new List<string>() { "" };
            headings.AddRange(question.Answers.Select(answer => answer.Text));

            var rows = new List<IEnumerable<string>>();
            var countRow = new List<string>() { "Frekvencija" };
            var percentageRow = new List<string>() { "Procenti" };

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            var totalCount = 0;
            var countPerAnswer = question.Answers.ToDictionary(answer => answer.Text, answer => 0);

            foreach (var category in allCategories)
            {
                var categoryRow = new List<string> { category.Label };
                var countPerCategory = 0;
                foreach (var answer in question.Answers)
                {
                    var count = allEntries.Count(entry => entry.Category.Name == category.Label && entry.SubmitedAnswers.Any(sa => sa.Question.Text == questionText && sa.Answer.Text == answer.Text));
                    categoryRow.Add(count.ToString());
                    totalCount += count;
                    countPerCategory += count;
                    countPerAnswer[answer.Text] += count;
                }

                if (includeTotalColumn)
                {
                    categoryRow.Add(countPerCategory.ToString());
                }

                rows.Add(categoryRow);
            }

            foreach (var answer in question.Answers)
            {
                var answerCount = countPerAnswer[answer.Text];
                countRow.Add(answerCount.ToString());

                var percentage = answerCount * 100f / totalCount;
                percentageRow.Add($"{(float.IsNaN(percentage) ? 0 : percentage):f2}%");
            }

            if (includeTotalColumn)
            {
                headings.Add("Ukupno");
                countRow.Add(totalCount.ToString());
                percentageRow.Add("100%");
            }

            rows.Add(countRow);
            rows.Add(percentageRow);

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }
    }
}
