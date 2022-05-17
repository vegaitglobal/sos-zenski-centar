using SosCentar.Contracts.Dtos.ReportTables;
﻿using SosCentar.Contracts.Dtos.ReportGraph;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IReportService
    {
        IEnumerable<GraphDto> GetGraphs(DateTime from, DateTime to);
    }
}
