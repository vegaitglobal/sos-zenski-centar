using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Categories;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace SosCentar.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class CategoriesController : ControllerBase
	{
		private ICategoryService _categoryService;

		public CategoriesController(ICategoryService categoryService)
		{
			_categoryService = categoryService;
		}

		[HttpGet]
		public ActionResult<IEnumerable<CategoryListDto>> GetCategoryList()
		{
			return Ok(_categoryService.GetAll());
		}

		[HttpGet("{id}")]
		public ActionResult<CategoryDto> GetCategory(Guid id)
		{
			return Ok(_categoryService.GetById(id));
		}
	}
}
