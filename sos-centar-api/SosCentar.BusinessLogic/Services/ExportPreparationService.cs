using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportPreparationService : IExportPreparationService
    {
        private readonly IEntryService _entryService;
        private readonly ICategoryService _categoryService;
        private readonly IQuestionService _questionService;

        public ExportPreparationService(IEntryService entryService, ICategoryService categoryService, IQuestionService questionService)
        {
            _entryService = entryService;
            _categoryService = categoryService;
            _questionService = questionService;
        }

        public string[,] GetUsersCountCategory(DateTime from, DateTime to)
        {
            var allCategories = _categoryService.GetAll().ToArray();

            var data = new string[2, allCategories.Count() + 1];

            //headers
            data[0, 0] = "";
            for (var index = 0; index < allCategories.Count(); index++)
            {
                var category = allCategories[index];
                data[0, index + 1] = category.Label;
            }

            data[1, 0] = "Broj korisnika/ca";
            for (var index = 0; index < allCategories.Count(); index++)
            {
                var count = _entryService.GetAllForCategoryId(allCategories[index].Id, from, to).Count();
                data[1, index + 1] = count.ToString();
            }

            return data;
        }

        public string[,] GetUsersCountPerSexPerCategory(DateTime from, DateTime to)
        {
            return GetDataByCategoryByQuestion(from, to, "Pol");
        }

        public string[,] GetUsersCountPerAgePerCategory(DateTime from, DateTime to)
        {
            return GetDataByCategoryByQuestion(from, to, "Uzrast");
        }

        public string[,] GetUsersCountPerMarginalizedGroup(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }

        private string[,] GetDataByCategoryByQuestion(DateTime from, DateTime to, string questionText)
        {
            var entries = _entryService.GetAllForQuestionName(questionText, from, to);
            var categoryNames = entries.Select(entry => entry.Category.Name).Distinct().ToArray();

            var question = _questionService.GetByName(questionText);
            Console.WriteLine(question?.Id);
            Console.WriteLine(question?.Answers);
            var answers = question.Answers.ToArray();

            var categoriesCount = categoryNames.Length;
            var data = new string[categoriesCount + 3, question.Answers.Count() + 1];

            // fill headers
            data[0, 0] = questionText;
            for (var i = 0; i < answers.Length; i++)
            {
                data[0, i + 1] = answers[i].Text;
            }

            var sums = new int[] { 0, 0 };

            for (var keyIndex = 0; keyIndex < categoriesCount; keyIndex++)
            {
                var categoryName = categoryNames[keyIndex];
                data[keyIndex + 1, 0] = categoryName;

                for (var answerIndex = 0; answerIndex < answers.Length; answerIndex++)
                {
                    var count = entries
                        .Where(entry => entry.Category.Name == categoryName && entry.SubmitedAnswers.Any(sa => sa.Answer.Text == answers[answerIndex].Text && sa.Question.Text == question.Text))
                        .Count();

                    sums[answerIndex] += count;
                    data[keyIndex + 1, answerIndex + 1] = count.ToString();
                }
            }

            data[categoriesCount + 1, 0] = "Frekvencija";
            data[categoriesCount + 2, 0] = "Procenti";

            var totalSum = sums.Sum();
            for (var sumIndex = 0; sumIndex < sums.Length; sumIndex++)
            {
                data[categoriesCount + 1, sumIndex + 1] = sums[sumIndex].ToString();
                data[categoriesCount + 2, sumIndex + 1] = (sums[sumIndex] * 100.0 / totalSum) + "%";
            }

            return data;
        }
    }
}
