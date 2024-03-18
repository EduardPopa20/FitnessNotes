using Microsoft.AspNetCore.Mvc;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Models;

namespace FitnessNotes.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultExercisesController : ControllerBase
    {

        private readonly DefaultExerciseService defaultExerciseService;
        public DefaultExercisesController(DefaultExerciseService defaultExerciseService)
        {
            this.defaultExerciseService = defaultExerciseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetDefaultExercises()
        {
            var defaultExercisesModel = await defaultExerciseService.GetAllDefaultExercises();

            return defaultExercisesModel == null ? NotFound() : Ok(defaultExercisesModel);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetDefaultExercise(int id)
        {
            var defaultExerciseModel = await defaultExerciseService.GetDefaultExerciseById(id);

            return defaultExerciseModel == null ? NotFound() : Ok(defaultExerciseModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDefaultExercise(int id, DefaultExerciseModel defaultExercise)
        {
            var updatedDefaultExercise = await defaultExerciseService.UpdateDefaultExercise(id, defaultExercise);

            return updatedDefaultExercise == null ? NotFound() : Ok();
        }

        [HttpPost]
        public IActionResult PostDefaultExercise(DefaultExerciseModel defaultExercise)
        {
            var createdDefaultExercise = defaultExerciseService.CreateDefaultExercise(defaultExercise);

            return createdDefaultExercise == null ? BadRequest() : Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDefaultExercise(int id)
        {
            try
            {
                defaultExerciseService.DeleteDefaultExerciseById(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
