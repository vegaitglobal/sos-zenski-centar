namespace SosCentar.Contracts.Interfaces.Services
{
    public interface ISecurityService
    {
        string CreateToken(string userEmail, string role);
        string HashPassword(string password);
    }
}
