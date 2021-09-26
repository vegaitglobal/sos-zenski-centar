using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.ReportGraph
{
    public class GraphDto
    {
        public string Label { get; set; }
        public IEnumerable<GraphSliceDto> Data { get; set; }
    }
}
