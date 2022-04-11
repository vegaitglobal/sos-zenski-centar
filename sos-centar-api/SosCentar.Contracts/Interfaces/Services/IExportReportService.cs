using System;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportReportService
    {
        byte[] CreateExportFileByteArray(DateTime from, DateTime to);
    }
}
