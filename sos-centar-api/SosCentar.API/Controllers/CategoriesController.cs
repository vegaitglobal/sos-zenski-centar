using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Categories;
using System;
using System.Collections.Generic;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class CategoriesController : ControllerBase
	{
		[HttpGet]
		public ActionResult<IEnumerable<CategoryListDto>> GetCategoryList()
		{
			throw new NotImplementedException();
		}

		[HttpGet("{id}")]
		public ActionResult<CategoryDto> GetCategory(Guid id)
		{
			throw new NotImplementedException();
		}
	}
}
