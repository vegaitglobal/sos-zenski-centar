using SosCentar.Contracts.Dtos.ReportTables;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IReportService
    {
        IEnumerable<Table> GetTableReport();
        object GetGraphs();
    }
}
