using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class Workout
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<DefaultExercise> DefaultExercises { get; set; } = new List<DefaultExercise>();
}
