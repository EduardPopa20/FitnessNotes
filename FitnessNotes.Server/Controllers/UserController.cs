using Microsoft.AspNetCore.Mvc;
using FitnessNotes.BusinessLogic.Implementation.UserProfile;

namespace FitnessNotes.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly UserService userService;
        public UserController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> GetUser([FromBody] string email)
        {
            var getExerciseModel = await userService.GetUserByEmail(email);

            return getExerciseModel == null ? NotFound() : Ok(getExerciseModel);
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult> GetDefaultExercise(int id)
        //{
        //    var defaultExerciseModel = await userService.GetDefaultExerciseById(id);

        //    return defaultExerciseModel == null ? NotFound() : Ok(defaultExerciseModel);
        //}

        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutDefaultExercise(int id, DefaultExerciseModel defaultExercise)
        //{
        //    var updatedDefaultExercise = await defaultExerciseService.UpdateDefaultExercise(id, defaultExercise);

        //    return updatedDefaultExercise == null ? NotFound() : Ok();
        //}

        //[HttpPost]
        //public IActionResult PostDefaultExercise(DefaultExerciseModel defaultExercise)
        //{
        //    var createdDefaultExercise = defaultExerciseService.CreateDefaultExercise(defaultExercise);

        //    return createdDefaultExercise == null ? BadRequest() : Ok();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteDefaultExercise(int id)
        //{
        //    try
        //    {
        //        defaultExerciseService.DeleteDefaultExerciseById(id);
        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
    }
}
