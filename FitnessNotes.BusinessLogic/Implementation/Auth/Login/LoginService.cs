using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles;
using FitnessNotes.BusinessLogic.Implementation.Auth.Login.Models;
using FitnessNotes.BusinessLogic.Implementation.Auth.Login.Validations;
using FitnessNotes.Common.helpers;
using FitnessNotes.DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Login
{
    public class LoginService : BaseService
    {
        private readonly IConfiguration _configuration;
        private readonly RoleService _roleService;
        private readonly LoginModelValidator _validator;

        public LoginService(ServiceDependencies serviceDependencies, RoleService roleService, IConfiguration configuration)
            : base(serviceDependencies)
        {
            _configuration = configuration;
            _roleService = roleService;
            _validator = new LoginModelValidator();
        }

        public async Task<string> GenerateJwtToken(DataAccess.Entities.User user)
        {
            var role = await UnitOfWork.Roles
                .GetAll()
                .FirstOrDefaultAsync(role => role.Id == user.RoleId);

            var claims = new[]
            {
                new Claim("Username", user.Username),
                new Claim("Email", user.Email),
                new Claim("Role", role.Name),
                new Claim("Weight", user.Weight.ToString()),
                new Claim("Height", user.Height.ToString()),
                new Claim("Birthday", user.Birthday.ToString())
            };

            var test = _configuration["Jwt:SecretKey"];

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(double.Parse(_configuration["Jwt:ExpirationHours"])),
                signingCredentials: creds);

            var stringifiedToken = new JwtSecurityTokenHandler().WriteToken(token);

            return stringifiedToken;
        }

        public async Task<(bool success, string token, IEnumerable<string>? Errors)> Login(LoginModel loginModel)
        {
            var validationResult = await _validator.ValidateAsync(loginModel);

            if (validationResult.IsValid)
            {
                var existingUser = UnitOfWork.Users
                .GetAll()
                .SingleOrDefault(u => u.Email == loginModel.Email);

                var isCorrectPassword = HashingHelpers
                    .VerifyPassword(loginModel.Password, existingUser.HashedPassword);

                if (!isCorrectPassword)
                {
                    return (false, "", ["The password or email is incorrect."]);
                }
                else
                {
                    var stringifiedToken = await GenerateJwtToken(existingUser);

                    return (true, stringifiedToken, []);
                }
            }
            else
            {
                return (false, "", validationResult.Errors.Select(error => error.ErrorMessage));
            }
        }
    }
}
