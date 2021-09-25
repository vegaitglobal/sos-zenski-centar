using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.ReportTables
{
	public class Table
	{
		public string Title { get; set; }
		public IEnumerable<TableRow> Data { get; set; }
	}
}
