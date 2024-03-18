using FitnessNotes.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnessNotes.BusinessLogic.Implementation.Workouts.Models
{
    public class WorkoutModel
    {
        public required string Name { get; set; }
        public List<DefaultExercise>? DefaultExercises { get; set; }
        public List<CustomExercise>? CustomExercises { get; set; }

    }
}
