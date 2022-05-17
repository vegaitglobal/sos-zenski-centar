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
    [Authorize]
    public class ReportTablesController : ControllerBase
    {
        private readonly IExportReportService _exportReportService;

        public ReportTablesController(IExportReportService exportReportService)
        {
            _exportReportService = exportReportService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ExportSectionDto>> Get([FromQuery] DateTime from, [FromQuery] DateTime to)
        {
            return Ok(_exportReportService.GetSections(from, to));
        }

        [HttpGet("export")]
        public IActionResult Export([FromQuery] DateTime from, [FromQuery] DateTime to)
        {
            var bytes = _exportReportService.CreateExportFileByteArray(from, to);

            var contentType = "APPLICATION/octet-stream";
            var fileName = "report.pdf";

            return File(bytes, contentType, fileName);
        }
    }
}
