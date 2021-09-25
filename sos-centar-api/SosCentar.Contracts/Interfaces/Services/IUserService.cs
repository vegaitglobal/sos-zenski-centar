using SosCentar.Domain.Models;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IUserService
	{
		public bool ValidateUserCredentials(string email, string password);
		public User GetByEmail(string email);
	}
}
