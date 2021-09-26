using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SosCentar.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
