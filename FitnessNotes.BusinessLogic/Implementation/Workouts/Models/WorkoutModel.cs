using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.Workouts.Models
{
    public class WorkoutModel
    {
        public required string Name { get; set; }
        public List<DefaultExercise>? DefaultExercises { get; set; }
        public List<CustomExercise>? CustomExercises { get; set; }
    }
}
