using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;

namespace SosCentar.BusinessLogic.Services
{
	public class UserService : IUserService
	{
		private readonly IUserRepository _userRepository;
		private readonly ISecurityService _securityService;

		public UserService(IUserRepository userRepository, ISecurityService securityService)
		{
			_userRepository = userRepository;
			_securityService = securityService;
		}

		public bool ValidateUserCredentials(string email, string password)
		{
			return _userRepository.ValidateUserExists(email, _securityService.HashPassword(password));
		}
	}
}
