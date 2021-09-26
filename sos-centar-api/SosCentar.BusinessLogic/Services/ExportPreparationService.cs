using SosCentar.Contracts.Interfaces.Services;
using System;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportPreparationService : IExportPreparationService
    {
        private readonly IEntryService _entryService;

        public ExportPreparationService(IEntryService entryService)
        {
            _entryService = entryService;
        }

        public string[][] GetUsersCountCategory(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }

        public string[][] GetUsersCountPerAgePerCategory(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }

        public string[][] GetUsersCountPerMarginalizedGroup(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }

        public string[][] GetUsersCountPerSexPerCategory(DateTime from, DateTime to)
        {
            throw new NotImplementedException();
        }
    }
}
