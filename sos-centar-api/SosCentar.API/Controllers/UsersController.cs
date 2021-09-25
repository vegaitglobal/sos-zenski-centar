using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Users;
using SosCentar.Contracts.Interfaces.Services;

namespace SosCentar.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly ISecurityService _jwtGeneratorService;

        public UsersController(ISecurityService jwtGeneratorService)
        {
            _jwtGeneratorService = jwtGeneratorService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] UserLoginDto loginModel)
        {
            var isValidUser = _jwtGeneratorService.ValidateUserCredentials(loginModel.Email, loginModel.Password);

            if (!isValidUser)
            {
                return Unauthorized();
            }

            var dto = new LoggedInUserDto
            {
                Email = loginModel.Email,
                AccessToken = _jwtGeneratorService.CreateToken(loginModel.Email),
            };

            return Ok(dto);
        }
    }
}
