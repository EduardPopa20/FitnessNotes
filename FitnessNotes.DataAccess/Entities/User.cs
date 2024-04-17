namespace FitnessNotes.DataAccess.Entities;

public partial class User
{
    public string Email { get; set; } = null!;

    public string HashedPassword { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Country { get; set; } = null!;

    public string City { get; set; } = null!;

    public double? Height { get; set; }

    public double? Weight { get; set; }

    public DateOnly Birthday { get; set; }

    public int? RoleId { get; set; }

    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public virtual ICollection<CustomExercise> CustomExercises { get; set; } = new List<CustomExercise>();

    public virtual Role? Role { get; set; }
}