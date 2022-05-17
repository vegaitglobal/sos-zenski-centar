using System;
using System.Collections.Generic;
using SosCentar.Contracts.Dtos.ReportTables;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportReportService
    {
        byte[] CreateExportFileByteArray(DateTime from, DateTime to);
        public IEnumerable<ExportSectionDto> GetSections(DateTime from, DateTime to);
    }
}
