using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Validations;
using FitnessNotes.Common.helpers;
using FitnessNotes.DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Register
{
    public class RegisterService : BaseService
    {
        public readonly RegisterModelValidator validator;
        public RegisterService(ServiceDependencies dependencies)
           : base(dependencies)
        {
            validator = new RegisterModelValidator();
        }

        public async Task<(bool, IEnumerable<string>? Errors)> RegisterUserAsync(RegisterModel model)
        {
            var validationResult = await validator.ValidateAsync(model);

            if (!validationResult.IsValid)
            {
                return (false, validationResult.Errors.Select(error => error.ErrorMessage));
            }

            var newUser = Mapper.Map<User>(model);

            newUser.HashedPassword = HashingHelpers.HashPassword(model.Password);

            newUser.RoleId = 2;

            UnitOfWork.Users
                .Insert(newUser);

            UnitOfWork.SaveChanges();

            return (true, null);
        }
    }
}
