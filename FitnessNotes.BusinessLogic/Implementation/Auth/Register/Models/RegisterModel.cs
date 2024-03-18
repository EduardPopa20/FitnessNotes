using System;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models
{
    public class RegisterModel
    {
        public string Email { get; set; }

        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

        public string Phone { get; set; }
        public string Country { get; set; }
        public string County { get; set; }
        public float? Height { get; set; }
        public float? Weight { get; set; }
        public DateTime? Birthday { get; set; }

    }
}
