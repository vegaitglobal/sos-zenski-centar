using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.ReportTables
{
    public class ExportTableDto
    {
        public string Title { get; set; }
        public IEnumerable<string> Headings { get; set; }
        public IEnumerable<IEnumerable<string>> Data { get; set; }
    }
}
