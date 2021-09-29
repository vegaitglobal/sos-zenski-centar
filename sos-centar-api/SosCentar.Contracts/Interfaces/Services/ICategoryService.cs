using SosCentar.Contracts.Dtos.Categories;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface ICategoryService
    {
        IEnumerable<CategoryInfoDto> GetAll();
        CategoryDto GetById(Guid id);
        CategoryInfoDto GetBaseInfoById(Guid id);
        Category GetCategoryById(Guid id);
    }
}
