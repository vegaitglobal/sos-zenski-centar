using SosCentar.Contracts.Dtos.Categories;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface ICategoryService
    {
        IEnumerable<CategoryInfoDto> GetAll();
        CategoryDto GetById(Guid id);
    }
}
