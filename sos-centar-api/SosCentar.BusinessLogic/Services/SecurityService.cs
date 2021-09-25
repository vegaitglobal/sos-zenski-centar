using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace SosCentar.BusinessLogic.Services
{
    public class SecurityService : ISecurityService
    {
        private readonly SymmetricSecurityKey _key;
        private readonly byte[] _salt;
        private readonly IUserRepository _userRepository;

        public SecurityService(IConfiguration configuration, IUserRepository userRepository)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenKey"]));
            _salt = Encoding.UTF8.GetBytes(configuration["Salt"]);
            _userRepository = userRepository;
        }

        public string CreateToken(string userEmail)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, userEmail)
            };

            var credentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public string HashPassword(string password)
        {
            var pbkdf2 = new Rfc2898DeriveBytes(password, _salt, 10000);

            return Convert.ToBase64String(pbkdf2.GetBytes(20));
        }

        public bool ValidateUserCredentials(string email, string password)
        {
            return _userRepository.ValidateUserExists(email, HashPassword(password));
        }
    }
}
