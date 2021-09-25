using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ReportContext _reportContext;

        public CategoryRepository(ReportContext reportContext)
        {
            _reportContext = reportContext;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _reportContext.Categories.AsEnumerable();
        }
    }
}
