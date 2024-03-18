using FitnessNotes.BusinessLogic.Implementation.Auth.Register;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly RegisterService _registerService;

        public AuthController(RegisterService registerService)
        {
            _registerService = registerService;
        }

        [HttpPost("register")]
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
    }
}
