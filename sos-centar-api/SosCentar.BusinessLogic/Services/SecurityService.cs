using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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

        public SecurityService(IConfiguration configuration)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenKey"]));
            _salt = Encoding.UTF8.GetBytes(configuration["Salt"]);
        }

        public string CreateToken(string userEmail)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, userEmail)
            };

            SigningCredentials credentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public string HashPassword(string password)
        {
            byte[] bytesPassword = Encoding.UTF8.GetBytes(password);
            HashAlgorithm sha512hash = new SHA512CryptoServiceProvider();
            for (int index = 0; index < 10000; ++index)
            {
                byte[] bytesIteration = Encoding.UTF8.GetBytes(Convert.ToBase64String(bytesPassword) + Convert.ToBase64String(_salt));
                bytesPassword = sha512hash.ComputeHash(bytesIteration);
            }
            return Convert.ToBase64String(bytesPassword);
        }
    }
}

