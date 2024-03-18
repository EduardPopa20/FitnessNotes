using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Mappings
{
    public class FoodMeasurementUnitMappings : Profile
    {
        public FoodMeasurementUnitMappings()
        {
            CreateMap<FoodMeasurementUnitModel, FoodMeasurementUnit>();
            CreateMap<FoodMeasurementUnit, FoodMeasurementUnitModel>();
        }
    }
}
