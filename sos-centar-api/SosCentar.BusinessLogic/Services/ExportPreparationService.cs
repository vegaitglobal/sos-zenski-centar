using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportPreparationService : IExportPreparationService
    {
        private readonly IEntryService _entryService;
        private readonly ICategoryService _categoryService;

        public ExportPreparationService(IEntryService entryService)
        {
            _entryService = entryService;
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
                data[0, index + 1] = count.ToString();
            }

            return data;
        }

        public string[,] GetUsersCountPerAgePerCategory(DateTime from, DateTime to)
        {
            //var entries = _entryService.GetAllForQuestionName("", from, to);


            throw new NotImplementedException();
        }

        public string[,] GetUsersCountPerMarginalizedGroup(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }

        public string[,] GetUsersCountPerSexPerCategory(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }
    }
}
