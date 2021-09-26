using SosCentar.Contracts.Dtos.ReportTables;
﻿using SosCentar.Contracts.Dtos.ReportGraph;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IReportService
    {
        IEnumerable<Table> GetTableReport(DateTime From, DateTime To);
        IEnumerable<GraphDto> GetGraphs(DateTime From, DateTime To);
    }
}
