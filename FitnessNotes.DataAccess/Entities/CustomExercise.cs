using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities;

public partial class CustomExercise
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int UserId { get; set; }

    public string Description { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
