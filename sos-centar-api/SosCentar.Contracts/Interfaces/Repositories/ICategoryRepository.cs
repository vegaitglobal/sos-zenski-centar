using SosCentar.Domain.Models;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAllCategories();
    }
}
