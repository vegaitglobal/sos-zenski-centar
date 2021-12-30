using SosCentar.Domain.Models;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
    public interface IUserRepository
    {
        bool ValidateUserExists(string email, string passwordHash);

        IEnumerable<User> GetAll();

        User GetByEmail(string email);

        User GetUserIfValid(string email, string passwordHash);

        void CreateUser(User newUser);

        void UpdateUser(string email, string firstName, string lastName, bool isAdmin);

        void DeleteUser(string email);
    }
}
