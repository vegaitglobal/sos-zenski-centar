using Microsoft.AspNetCore.Authorization;
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
        private readonly IExportReportService _exportReportService;

        public ReportTablesController(IReportService reportService, IExportReportService exportReportService)
        {
            _reportService = reportService;
            _exportReportService = exportReportService;
        }

		[HttpGet]
		public ActionResult<IEnumerable<Table>> Get([FromQuery(Name = "from")] DateTime From, [FromQuery(Name = "to")] DateTime To)
		{
			return Ok(_reportService.GetTableReport(From, To));
		}

        [HttpGet("export")]
        [AllowAnonymous]
        public IActionResult Export([FromQuery] DateTime from, [FromQuery] DateTime to)
        {
            var bytes = _exportReportService.CreateDemoFile(from, to);

            var contentType = "APPLICATION/octet-stream";
            var fileName = "word.docx";

            return File(bytes, contentType, fileName);
        }
    }
}
