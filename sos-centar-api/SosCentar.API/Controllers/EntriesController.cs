﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Services;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class EntriesController : ControllerBase
	{
		private readonly IEntryService _entryService;

		public EntriesController(IEntryService entryService)
		{
			_entryService = entryService;
		}

		[HttpPost]
		public IActionResult Post([FromBody] EntryDto submittedEntryDto)
		{
			var userEmail = HttpContext.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email).Value;
            try
            {
                _entryService.Create(submittedEntryDto, userEmail);
            }
            catch (ValidationException e)
            {
				return BadRequest(e.Message.ToString());
            }
			return Ok();
		}

	}
}
