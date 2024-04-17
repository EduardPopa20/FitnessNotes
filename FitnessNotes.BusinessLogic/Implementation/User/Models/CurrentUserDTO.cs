using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.UserProfile.Models
{
    public class CurrentUserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public int RoleId { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public DateOnly Birthday { get; set; }
        public string Username { get; set; }
        public bool IsAuthenticated { get; set; }
    }
}
