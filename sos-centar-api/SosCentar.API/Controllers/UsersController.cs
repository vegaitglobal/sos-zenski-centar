using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
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
        private readonly IUserService _userService;

		public UsersController(ISecurityService jwtGeneratorService, IUserService userService)
		{
			_jwtGeneratorService = jwtGeneratorService;
			_userService = userService;
		}

        [HttpPost("login")]
        [AllowAnonymous]
        public ActionResult<LoggedInUserDto> Login([FromBody] UserLoginDto loginModel)
        {
            var isValidUser = _userService.ValidateUserCredentials(loginModel.Email, loginModel.Password);

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
