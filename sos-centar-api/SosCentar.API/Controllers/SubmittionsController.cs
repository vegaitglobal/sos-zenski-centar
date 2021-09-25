using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Services;
using System.Linq;
using System.Security.Claims;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class SubmissionsController : ControllerBase
	{
		private readonly IEntryService _entryService;

		public SubmissionsController(IEntryService entryService)
		{
			_entryService = entryService;
		}

		[HttpPost]
		public IActionResult Post([FromBody] EntryDto submittedEntryDto)
		{
			var userEmail = HttpContext.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email).Value;
			_entryService.Create(submittedEntryDto, userEmail);
			return Ok();
		}

	}
}
