using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnessNotes.Common
{
    public static class AuthMessages
    {
        public static readonly string RequiredField = "This field is required";
        public static readonly string MustBeEmail = "The email format is not correct";
        public static readonly string MaxLengthEmail = "Email must not be longer than 320 characters";
        public static readonly string MinLengthPassword = "Password must be at least 8 characters";
        public static readonly string MaxLengthPassword = "Password must not be longer than 20 characters";
        public static readonly string DifferentPasswords = "Passwords do not match";
        public static readonly string AtLeastOneUppercase = "Password must contain at least one uppercase letter";
        public static readonly string AtLeastOneLowercase = "Password must contain at least one lowercase letter";
        public static readonly string AtLeastOneDigit = "Password must contain at least one digit";
        public static readonly string AtLeastOneSpecial = "Your password must contain at least one (!? *.)";
    }
}
