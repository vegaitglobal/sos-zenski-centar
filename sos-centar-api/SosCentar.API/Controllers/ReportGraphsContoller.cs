using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace SosCentar.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReportGraphsController : ControllerBase
    {
        private readonly IReportService _reportService;

        public ReportGraphsController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<GraphDto>> Get([FromQuery(Name = "from")] DateTime From, [FromQuery(Name = "to")] DateTime To)
        {
            return Ok(_reportService.GetGraphs(From, To));
        }
    }
}
