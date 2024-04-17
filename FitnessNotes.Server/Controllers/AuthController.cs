using FitnessNotes.BusinessLogic.Implementation.Auth.Login;
using FitnessNotes.BusinessLogic.Implementation.Auth.Login.Models;
using FitnessNotes.BusinessLogic.Implementation.Auth.Login.Validations;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly LoginModelValidator _loginValidator;
        private readonly RegisterService _registerService;
        private readonly LoginService _loginService;

        public AuthController(RegisterService registerService, LoginService loginService)
        {
            _registerService = registerService;
            _loginService = loginService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            var (success, errors) = await _registerService.RegisterUserAsync(model);
            if (success)
            {
                return Ok("Registration successful");
            }
            else
            {
                return BadRequest(errors);
            }
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var (success, token, errors) = await _loginService.Login(model);

            if (success)
            {
                return Ok(new { token, error = false}) ;
            }
            else
            {
                return BadRequest(new { error = true, errors });
            }
        }
    }
}
