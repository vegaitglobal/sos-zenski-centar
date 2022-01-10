using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SosCentar.Contracts.Dtos.Users;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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
            var user = _userService.GetUserIfValid(loginModel.Email, loginModel.Password);

            if (user is null)
            {
                return Unauthorized();
            }

            var role = user.IsAdmin ? "admin" : "user";
            var dto = new LoggedInUserDto
            {
                Email = loginModel.Email,
                AccessToken = _jwtGeneratorService.CreateToken(loginModel.Email, role),
            };

            return Ok(dto);
        }

        [HttpGet("")]
        [Authorize(Roles = "admin")]
        public ActionResult<IEnumerable<ResponseUserDto>> GetUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpGet("{email}")]
        [Authorize(Roles = "admin")]
        public ActionResult<ResponseUserDto> GetUser(string email)
        {
            try
            {
                var userDto = _userService.GetUserByEmail(email);
                return Ok(userDto);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }


        [HttpPost("")]
        [Authorize(Roles = "admin")]
        public ActionResult<string> CreateUser([FromBody] UserCreateDto userDto)
        {
            try
            {
                _userService.CreateUser(userDto);
            }catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }catch (ArgumentException ex)
            {
                return Conflict(ex.Message);
            }
            return Created("api/Users/" + userDto.Email, null);
        }

        [HttpPut("{email}")]
        [Authorize(Roles = "admin")]
        public IActionResult UpdateUser(string email, [FromBody] UserUpdateDto userDto)
        {
            try
            {
                _userService.UpdateteUser(email, userDto);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{email}")]
        [Authorize(Roles = "admin")]
        public ActionResult<string> DeleteUser(string email)
        {
            try
            {
                _userService.DeleteUser(email);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
