using SosCentar.Contracts.Dtos.Categories;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
	public class CategoryService : ICategoryService
	{
		private ICategoryRepository _categoryRepository;

		public CategoryService(ICategoryRepository categoryRepository)
		{
			_categoryRepository = categoryRepository;
		}

		public IEnumerable<CategoryListDto> GetAll()
		{
			return _categoryRepository.GetAllCategories()
				.OrderBy(category => category.Order)
				.Select(category => new CategoryListDto() { Id = category.Id, Label = category.Name });
		}
	}
}
