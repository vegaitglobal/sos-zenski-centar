using Microsoft.AspNetCore.Authorization;
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
        private readonly IExportReportService _exportReportService;

        public ReportTablesController(IReportService reportService, IExportReportService exportReportService)
        {
            _reportService = reportService;
            _exportReportService = exportReportService;
        }

        [HttpGet]
        public ActionResult<Table> Get()
        {
            return Ok(_reportService.GetTableReport());
        }

        [HttpGet("export")]
        [AllowAnonymous]
        public IActionResult Export()
        {
            var bytes = _exportReportService.CreateDemoFile();

            var contentType = "APPLICATION/octet-stream";
            var fileName = "word.docx";

            return File(bytes, contentType, fileName);
        }
    }
}
