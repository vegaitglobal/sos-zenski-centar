using System;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportPreparationService
    {
        public string[][] GetUsersCountCategory(DateTime from, DateTime to);
        public string[][] GetUsersCountPerSexPerCategory(DateTime from, DateTime to);
        public string[][] GetUsersCountPerAgePerCategory(DateTime from, DateTime to);
        public string[][] GetUsersCountPerMarginalizedGroup(DateTime from, DateTime to);
    }
}
