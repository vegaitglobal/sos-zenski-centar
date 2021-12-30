using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Contracts.Dtos.Users;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

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

		public User GetUserIfValid(string email, string password)
		{
			return _userRepository.GetUserIfValid(email, _securityService.HashPassword(password));
		}

		public IEnumerable<ResponseUserDto> GetAllUsers()
		{
			return _userRepository.GetAll().Select(user => new ResponseUserDto
			{
				Email = user.Email,
				FirstName = user.FirstName,
				LastName = user.LastName,
				IsAdmin = user.IsAdmin
			});
		}


		public ResponseUserDto GetUserByEmail(string email)
		{
			var user = _userRepository.GetByEmail(email);

			if (user == null)
			{
				throw new KeyNotFoundException("There is no user with email: " + email);
			}

			var userDto = new ResponseUserDto()
			{
				Email = user.Email,
				FirstName = user.FirstName,
				LastName = user.LastName,
				IsAdmin = user.IsAdmin
			};
			return userDto;
		}

		public void CreateUser(UserCreateDto userDto)
		{
			var existingUser = _userRepository.GetByEmail(userDto.Email);

			if (existingUser is not null)
			{
				throw new ArgumentException("Email already in use!");
			}

			var User = new User()
			{
				Id = new Guid(),
				FirstName = userDto.FirstName,
				LastName = userDto.LastName,
				Email = userDto.Email,
				Password = _securityService.HashPassword(userDto.Password),
				IsAdmin = userDto.IsAdmin
			};
			_userRepository.CreateUser(User);
		}

		public void UpdateteUser(string email, UserUpdateDto userDto)
		{
			_userRepository.UpdateUser(email, userDto.FirstName, userDto.LastName, userDto.IsAdmin);
		}

		public void DeleteUser(string email)
		{
			_userRepository.DeleteUser(email);
		}
	}
}
