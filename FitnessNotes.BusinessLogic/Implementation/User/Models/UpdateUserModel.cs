namespace FitnessNotes.BusinessLogic.Implementation.UserProfile.Models
{
    public class UpdateUserModel
    {
        public string Phone { get; set; } = null!;

        public double? Height { get; set; }

        public double? Weight { get; set; }

        public string Username { get; set; } = null!;
    }
}
