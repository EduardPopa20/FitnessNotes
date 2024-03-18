using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Mappings;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Models;
using FitnessNotes.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits
{
    public class FoodMeasurementUnitService : BaseService
    {
        public FoodMeasurementUnitService(ServiceDependencies dependencies)
            : base(dependencies)
        {
        }

        public async Task<List<FoodMeasurementUnitModel>>? GetAllFoodMeasurementUnits()
        {
            var foodMeasurementUnits = await UnitOfWork.FoodMeasurementUnits
                .GetAll()
                .ToListAsync();

            if (foodMeasurementUnits == null)
            {
                return null;
            }

            var result = Mapper.Map<List<FoodMeasurementUnit>, List<FoodMeasurementUnitModel>>(foodMeasurementUnits);

            return result;
        }

        public async Task<FoodMeasurementUnitModel>? GetFoodMeasurementUnitById(int foodMeasurementUnitId)
        {
            var foodMeasurementUnit = await UnitOfWork.FoodMeasurementUnits
                .GetAll()
                .FirstOrDefaultAsync(foodMeasurementUnit => foodMeasurementUnit.Id == foodMeasurementUnitId);

            if (foodMeasurementUnit == null)
            {
                return null;
            }

            var result = Mapper.Map<FoodMeasurementUnitModel>(foodMeasurementUnit);

            return result;
        }

        public FoodMeasurementUnitModel? CreateFoodMeasurementUnit(FoodMeasurementUnitModel foodMeasurementUnitModel)
        {
            var newFoodMeasurementUnit = Mapper.Map<FoodMeasurementUnit>(foodMeasurementUnitModel);

            try
            {
                var result = UnitOfWork.FoodMeasurementUnits
                    .Insert(newFoodMeasurementUnit);

                UnitOfWork.SaveChanges();
                return foodMeasurementUnitModel;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<FoodMeasurementUnitModel>? UpdateFoodMeasurementUnit(int id, FoodMeasurementUnitModel foodMeasurementUnitModel)
        {
            var foodMeasurementUnitEntity = await UnitOfWork.FoodMeasurementUnits
                .GetAll()
                .FirstOrDefaultAsync(r => r.Id == id);

            if (foodMeasurementUnitEntity == null)
            {
                return null;
            }

            Mapper.Map(foodMeasurementUnitModel, foodMeasurementUnitEntity);

            try
            {
                UnitOfWork.SaveChanges();
            }
            catch
            {
                return null;
            }

            return foodMeasurementUnitModel;
        }

        public async void DeleteFoodMeasurementUnitById(int id)
        {
            var foodMeasurementUnitEntity = await UnitOfWork.FoodMeasurementUnits
                .GetAll()
                .FirstOrDefaultAsync(r => r.Id == id);

            try
            {
                UnitOfWork.FoodMeasurementUnits.Delete(foodMeasurementUnitEntity);
                UnitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
