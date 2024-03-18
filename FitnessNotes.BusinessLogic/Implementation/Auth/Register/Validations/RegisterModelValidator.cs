using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using FitnessNotes.Common;
using FluentValidation;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Register.Validations
{
    public class RegisterModelValidator : AbstractValidator<RegisterModel>
    {
        public RegisterModelValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty().WithMessage(AuthMessages.RequiredField)
                .EmailAddress().WithMessage(AuthMessages.MustBeEmail)
                .MaximumLength(320).WithMessage(AuthMessages.MaxLengthEmail);

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage(AuthMessages.RequiredField)
                .MinimumLength(8).WithMessage(AuthMessages.MinLengthPassword)
                .MaximumLength(128).WithMessage(AuthMessages.MaxLengthPassword)
                .Matches(@"[A-Z]").WithMessage(AuthMessages.AtLeastOneUppercase)
                .Matches(@"[a-z]").WithMessage(AuthMessages.AtLeastOneLowercase)
                .Matches(@"[0-9]").WithMessage(AuthMessages.AtLeastOneDigit)
                .Matches(@"[\!\?\*\.]+").WithMessage(AuthMessages.AtLeastOneSpecial);

            RuleFor(x => x.ConfirmPassword)
            .NotEmpty().WithMessage(AuthMessages.RequiredField)
            .Equal(x => x.Password).WithMessage(AuthMessages.DifferentPasswords);

        }
    }
}
