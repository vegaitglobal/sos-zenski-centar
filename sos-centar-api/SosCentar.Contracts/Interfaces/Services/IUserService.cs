using SosCentar.Contracts.Dtos.Users;
using SosCentar.Domain.Models;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IUserService
    {
        public bool ValidateUserCredentials(string email, string password);

        User GetUserIfValid(string email, string password);

        ResponseUserDto GetUserByEmail(string email);

        IEnumerable<ResponseUserDto> GetAllUsers();

        void CreateUser(UserCreateDto userDto);

        void UpdateteUser(string email, UserUpdateDto userDto);

        void DeleteUser(string email);
    }
}
