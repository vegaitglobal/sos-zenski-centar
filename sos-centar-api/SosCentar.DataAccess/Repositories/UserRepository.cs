using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System.Linq;
using System.Collections.Generic;

namespace SosCentar.DataAccess.Repositories
{
	public class UserRepository : IUserRepository
    {
        private readonly ReportContext _reportContext;

        public UserRepository(ReportContext reportContext)
        {
            _reportContext = reportContext;
        }

        public IEnumerable<User> GetAll() 
        {
            return _reportContext.Users.AsEnumerable();
        }

        public User GetByEmail(string email)
		{
            return _reportContext.Users.FirstOrDefault(user => user.Email == email);
		}

		public bool ValidateUserExists(string email, string passwordHash)
        {
            return _reportContext.Users.Any(user => user.Email == email && user.Password == passwordHash);
        }

        public User GetUserIfValid(string email, string passwordHash)
        {
            return _reportContext.Users.FirstOrDefault(user => user.Email == email && user.Password == passwordHash);
        }

        public void CreateUser(User newUser)
        {
            _reportContext.Users.Add(newUser);
            _reportContext.SaveChanges();
        }

        public void UpdateUser(string email, string firstName, string lastName, bool isAdmin) 
        {
            var user = _reportContext.Users.FirstOrDefault(user => user.Email == email);
            
            if(user is null)
            {
                throw new KeyNotFoundException("There is no user with email: " + email);
            }

            user.FirstName = firstName;
            user.LastName = lastName;
            user.IsAdmin = isAdmin;

            _reportContext.SaveChanges();
        }

        public void DeleteUser(string email) 
        {
            var user = _reportContext.Users.FirstOrDefault(user => user.Email == email);

            if (user is null)
            {
                throw new KeyNotFoundException("There is no user with email: " + email);
            }

            _reportContext.Users.Remove(user);
            _reportContext.SaveChanges();
        }

    }
}
