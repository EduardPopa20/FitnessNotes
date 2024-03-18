using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FitnessNotes.DataAccess.Context;
using FitnessNotes.DataAccess.Entities;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Models;

namespace FitnessNotes.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodMeasurementUnitsController : ControllerBase
    {

        private readonly FoodMeasurementUnitService foodMeasurementUnitService;
        public FoodMeasurementUnitsController(FoodMeasurementUnitService foodMeasurementUnitService)
        {
            this.foodMeasurementUnitService = foodMeasurementUnitService;
        }

        [HttpGet]
        public async Task<IActionResult> GetFoodMeasurementUnits()
        {
            var foodMeasurementUnitsModel = await foodMeasurementUnitService.GetAllFoodMeasurementUnits();

            return foodMeasurementUnitsModel == null ? NotFound() : Ok(foodMeasurementUnitsModel);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetFoodMeasurementUnit(int id)
        {
            var foodMeasurementUnitModel = await foodMeasurementUnitService.GetFoodMeasurementUnitById(id);

            return foodMeasurementUnitModel == null ? NotFound() : Ok(foodMeasurementUnitModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutFoodMeasurementUnit(int id, FoodMeasurementUnitModel foodMeasurementUnit)
        {
            var updatedFoodMeasurementUnit = await foodMeasurementUnitService.UpdateFoodMeasurementUnit(id, foodMeasurementUnit);

            return updatedFoodMeasurementUnit == null ? NotFound() : Ok();
        }

        [HttpPost]
        public IActionResult PostFoodMeasurementUnit(FoodMeasurementUnitModel foodMeasurementUnit)
        {
            var createdFoodMeasurementUnit = foodMeasurementUnitService.CreateFoodMeasurementUnit(foodMeasurementUnit);

            return createdFoodMeasurementUnit == null ? BadRequest() : Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodMeasurementUnit(int id)
        {
            try
            {
                foodMeasurementUnitService.DeleteFoodMeasurementUnitById(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
