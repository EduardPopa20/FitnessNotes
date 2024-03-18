using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class DefaultExercise
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Workout> Workouts { get; set; } = new List<Workout>();
}
