using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ReportTablesController : ControllerBase
	{
		private readonly IReportService _reportService;

		public ReportTablesController(IReportService reportService)
		{
			_reportService = reportService;
		}

		[HttpGet]
		public ActionResult<IEnumerable<Table>> Get([FromQuery(Name = "from")] DateTime From, [FromQuery(Name = "to")] DateTime To)
		{
			return Ok(_reportService.GetTableReport(From, To));
		}
	}
}
