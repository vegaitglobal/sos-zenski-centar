using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Services;

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
		public ActionResult<Table> Get()
		{
			return Ok(_reportService.GetTableReport());
		}
	}
}
