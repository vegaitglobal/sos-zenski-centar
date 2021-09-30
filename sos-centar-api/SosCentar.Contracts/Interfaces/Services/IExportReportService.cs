using System;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportReportService
    {
        byte[] CreateExportFile(DateTime from, DateTime to);
    }
}
