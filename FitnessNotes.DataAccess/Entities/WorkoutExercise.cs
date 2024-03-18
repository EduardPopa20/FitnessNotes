using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class WorkoutExercise
{
    public int Id { get; set; }

    public int WorkoutId { get; set; }

    public int ExerciseId { get; set; }

    public int Sets { get; set; }

    public int Repetitions { get; set; }
}
