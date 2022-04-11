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
            var answers = _questionRepository.GetByName(questionText).First().Answers.OrderBy(answer => answer.Order);

            var headings = new List<string>() { "" };
            headings.AddRange(answers.Select(answer => answer.Text));

            var countRow = new List<string>() { "Frekvencija" };
            var percentageRow = new List<string>() { "Procenti" };

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            var totalCount = 0;
            foreach (var answer in answers)
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

            TryAddTotalColumn(includeTotalColumn, headings, countRow, percentageRow, totalCount);

            var rows = new List<IEnumerable<string>> { countRow, percentageRow };

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }

        public ExportTableDto GetReportPerAnswerOnQuestionPerCategory(DateTime from, DateTime to, string title, string questionText, bool includeTotalColumn = false)
        {
            var answers = _questionRepository.GetByName(questionText).First().Answers.OrderBy(answer => answer.Order);
            var allCategories = _categoryService.GetAll();

            var headings = new List<string>() { "" };
            headings.AddRange(answers.Select(answer => answer.Text));

            var rows = new List<IEnumerable<string>>();
            var countRow = new List<string>() { "Frekvencija" };
            var percentageRow = new List<string>() { "Procenti" };

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            var totalCount = 0;
            var countPerAnswer = answers.ToDictionary(answer => answer.Text, answer => 0);

            foreach (var category in allCategories)
            {
                var categoryRow = new List<string> { category.Label };
                var countPerCategory = 0;
                foreach (var answer in answers)
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

            foreach (var answer in answers)
            {
                var answerCount = countPerAnswer[answer.Text];
                countRow.Add(answerCount.ToString());

                var percentage = answerCount * 100f / totalCount;
                percentageRow.Add($"{(float.IsNaN(percentage) ? 0 : percentage):f2}%");
            }

            TryAddTotalColumn(includeTotalColumn, headings, countRow, percentageRow, totalCount);

            rows.Add(countRow);
            rows.Add(percentageRow);

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }

        public ExportTableDto GetReportPerAnswerOnQuestionPerOtherQuestion(DateTime from, DateTime to, string title, string questionText, string otherQuestionText, bool includeTotalColumn = false)
        {
            // horizontal answers
            var answers = _questionRepository.GetByName(questionText).First().Answers.OrderBy(answer => answer.Order);
            // vertical answers
            var otherQuestionAnswers = _questionRepository.GetByName(otherQuestionText).First().Answers.OrderBy(answer => answer.Order);

            var headings = new List<string>() { "" };
            headings.AddRange(answers.Select(answer => answer.Text));

            var rows = new List<IEnumerable<string>>();
            var countRow = new List<string>() { "Frekvencija" };
            var percentageRow = new List<string>() { "Procenti" };

            var allEntries = _entryRepository.GetInRangeForQuestionName(questionText, from, to);
            var totalCount = 0;
            var countPerAnswer = answers.ToDictionary(answer => answer.Text, answer => 0);

            foreach (var otherAnswer in otherQuestionAnswers)
            {
                var otherAnswerRow = new List<string> { otherAnswer.Text };
                var countPerOtherAnwser = 0;
                foreach (var answer in answers)
                {
                    var count = allEntries.Count(entry =>
                        entry.SubmitedAnswers.Any(submitedAnswer => submitedAnswer.Question.Text == questionText && submitedAnswer.Answer.Text == answer.Text) &&
                        entry.SubmitedAnswers.Any(submitedOtherAnswer => submitedOtherAnswer.Question.Text == otherQuestionText && submitedOtherAnswer.Answer.Text == otherAnswer.Text));

                    otherAnswerRow.Add(count.ToString());
                    totalCount += count;
                    countPerOtherAnwser += count;
                    countPerAnswer[answer.Text] += count;
                }

                if (includeTotalColumn)
                {
                    otherAnswerRow.Add(countPerOtherAnwser.ToString());
                }

                rows.Add(otherAnswerRow);
            }

            foreach (var answer in answers)
            {
                var answerCount = countPerAnswer[answer.Text];
                countRow.Add(answerCount.ToString());

                var percentage = answerCount * 100f / totalCount;
                percentageRow.Add($"{(float.IsNaN(percentage) ? 0 : percentage):f2}%");
            }

            TryAddTotalColumn(includeTotalColumn, headings, countRow, percentageRow, totalCount);

            rows.Add(countRow);
            rows.Add(percentageRow);

            return new ExportTableDto { Title = title, Headings = headings, Data = rows };
        }

        private static bool TryAddTotalColumn(bool includeTotalColumn, List<string> headings, List<string> countRow, List<string> percentageRow, int totalCount)
        {
            if (includeTotalColumn)
            {
                headings.Add("Ukupno");
                countRow.Add(totalCount.ToString());
                percentageRow.Add("100%");
            }

            return includeTotalColumn;
        }
    }
}
