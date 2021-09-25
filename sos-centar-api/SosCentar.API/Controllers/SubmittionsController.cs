using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class SubmittionsController : ControllerBase
	{
		private readonly IEntryService _entryService;

		public SubmittionsController(IEntryService entryService)
		{
			_entryService = entryService;
		}

		[HttpPost]
		public IActionResult Post([FromBody] SubmittedEntryDto submittedEntryDto)
		{
			var userEmail = HttpContext.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email).Value;
			_entryService.Create(submittedEntryDto, userEmail);
			throw new NotImplementedException();
		}

	}
}
