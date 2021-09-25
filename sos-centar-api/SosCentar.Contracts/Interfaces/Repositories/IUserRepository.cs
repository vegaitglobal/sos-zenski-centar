using SosCentar.Domain.Models;

namespace SosCentar.Contracts.Interfaces.Repositories
{
    public interface IUserRepository
    {
        bool ValidateUserExists(string email, string passwordHash);

        User GetByEmail(string email);
    }
}
