using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.ReportTables
{
	public class TableRow
	{
		public IEnumerable<string> Headings { get; set; }
		public IEnumerable<IEnumerable<string>> Data { get; set; }
	}
}
