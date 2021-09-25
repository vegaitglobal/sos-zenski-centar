using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
	public class UserRepository : IUserRepository
    {
        private readonly ReportContext _reportContext;

        public UserRepository(ReportContext reportContext)
        {
            _reportContext = reportContext;
        }

		public User GetByEmail(string email)
		{
            return _reportContext.Users.FirstOrDefault(user => user.Email == email);
		}

		public bool ValidateUserExists(string email, string passwordHash)
        {
            return _reportContext.Users.Any(user => user.Email == email && user.Password == passwordHash);
        }
    }
}
