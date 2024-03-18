using FitnessNotes.Common;
using System;
using System.Collections.Generic;

namespace FitnessNotes.DataAccess.Entities
{
    public partial class User
    {
        public string Email { get; set; } = null!;

        public string HashedPassword { get; set; } = null!;

        public string? Phone { get; set; }

        public string? Country { get; set; }

        public string? County { get; set; }

        public double? Height { get; set; }

        public double? Weight { get; set; }

        public DateOnly? Birthday { get; set; }

        public int? RoleId { get; set; }

        public int Id { get; set; }

        public virtual ICollection<CustomExercise> CustomExercises { get; set; } = new List<CustomExercise>();

        public virtual Role? Role { get; set; }
    }
}


