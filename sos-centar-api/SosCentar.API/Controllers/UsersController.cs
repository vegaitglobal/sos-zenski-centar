using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SosCentar.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public string TestIt()
        {
            return "test";
        }

        [HttpGet("login")]
        [AllowAnonymous]
        public string Login()
        {
            return "AllowAnonymous";
        }
    }
}
