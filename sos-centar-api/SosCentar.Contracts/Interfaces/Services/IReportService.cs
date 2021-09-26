using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Dtos.ReportTables;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IReportService
    {
        Table GetTableReport();
        IEnumerable<GraphDto> GetGraphs(DateTime From, DateTime To);
    }
}
