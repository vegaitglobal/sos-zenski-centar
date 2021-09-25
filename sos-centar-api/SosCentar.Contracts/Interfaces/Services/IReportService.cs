using SosCentar.Contracts.Dtos.ReportTables;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IReportService
    {
        Table GetTableReport();
        object GetGraphs();
    }
}
