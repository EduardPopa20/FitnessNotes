using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Mappings
{
    public class DefaultExerciseMappings : Profile
    {
        public DefaultExerciseMappings()
        {
            CreateMap<DefaultExerciseModel, DefaultExercise>();
            CreateMap<DefaultExercise, DefaultExerciseModel>();
        }
    }
}
