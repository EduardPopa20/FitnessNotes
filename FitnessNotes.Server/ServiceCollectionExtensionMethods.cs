using FitnessNotes.BusinessLogic;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Mappings;
using FitnessNotes.BusinessLogic.Implementation.Workouts.Mappings;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Mappings;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Mappings;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Mappings;
using FitnessNotes.BusinessLogic.Implementation.Auth.Login;
using FitnessNotes.BusinessLogic.Implementation.UserProfile.Mappings;
using FitnessNotes.BusinessLogic.Implementation.UserProfile;
using FitnessNotes.BusinessLogic.Implementation.UserProfile.Models;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace FitnessNotes.WebApp.Code.ExtensionMethods
{
    public static class ServiceCollectionExtensionMethods
    {
        public static IServiceCollection AddFitnessNotesBusinessLogic(this IServiceCollection services)
        {
            services.AddScoped<ServiceDependencies>();
            services.AddScoped<RoleService>();
            services.AddScoped<FoodMeasurementUnitService>();
            services.AddScoped<DefaultExerciseService>();
            services.AddScoped<DefaultExerciseService>();
            services.AddScoped<RegisterService>();
            services.AddScoped <LoginService>();
            services.AddScoped<UserService>();

            return services;
        }

        public static IServiceCollection AddAutoMapperConfigs(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(WorkoutMappings));
            services.AddAutoMapper(typeof(RoleMappings));
            services.AddAutoMapper(typeof(FoodMeasurementUnitMappings));
            services.AddAutoMapper(typeof(DefaultExerciseMappings));
            services.AddAutoMapper(typeof(RegisterMappings));
            services.AddAutoMapper(typeof(UserMappings));

            return services;
        }

        public static IServiceCollection AddFitnessNotesCurrentUser(this IServiceCollection services)
        {
            services.AddScoped(s =>
            {
                var httpContext = s.GetService<IHttpContextAccessor>()?.HttpContext;
                if (httpContext == null || httpContext.User.Claims.ToList().Count == 0)
                {
                    return new CurrentUserDTO
                    {
                        Id = -1,
                        RoleId = -1,
                        IsAuthenticated = false,
                        Email = ""
                    };
                }
            
                var claims = httpContext.User.Claims;
                var userIdClaim = claims?.FirstOrDefault(c => c.Type == "Id")?.Value;
                var userRoleIdClaim = claims.FirstOrDefault(c => c.Type == "RoleId")?.Value;

                int.TryParse(userIdClaim, out int userId);
                int.TryParse(userRoleIdClaim, out int userRoleId);

                return new CurrentUserDTO
                {
                    Id = userId,
                    IsAuthenticated = httpContext.User.Identity.IsAuthenticated,
                    Email = claims.ToList()[1].Value,
                    Username = claims.ToList()[0].Value
                };
            });

            return services;
        }
    }
}
