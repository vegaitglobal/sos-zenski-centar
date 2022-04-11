using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.ReportTables
{
    public class ExportSectionDto
    {
        public string Title { get; set; }
        public IEnumerable<ExportTableDto> Tables { get; set; } = new List<ExportTableDto>();
    }
}
