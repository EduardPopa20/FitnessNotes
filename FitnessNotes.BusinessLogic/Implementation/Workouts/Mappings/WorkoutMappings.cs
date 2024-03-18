using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.Workouts.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.Workouts.Mappings
{
    public class WorkoutMappings : Profile
    {
        public WorkoutMappings() { 
            CreateMap<WorkoutModel, Workout>();
            CreateMap<Workout, WorkoutModel>();
        }
    }   
}
