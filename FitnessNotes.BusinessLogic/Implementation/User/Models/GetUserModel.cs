namespace FitnessNotes.BusinessLogic.Implementation.UserProfile.Models
{
    public partial class GetUserModel
    {
        public string Email { get; set; } = null!;

        public string Phone { get; set; } = null!;

        public string Country { get; set; } = null!;

        public string City { get; set; } = null!;

        public double? Height { get; set; }

        public double? Weight { get; set; }

        public DateOnly Birthday { get; set; }

        public string Username { get; set; } = null!;
    }
}
