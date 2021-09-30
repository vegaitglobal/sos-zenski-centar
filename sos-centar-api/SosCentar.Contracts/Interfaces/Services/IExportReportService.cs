using System;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportReportService
    {
        byte[] CreateDemoFile(DateTime from, DateTime to);
    }
}
