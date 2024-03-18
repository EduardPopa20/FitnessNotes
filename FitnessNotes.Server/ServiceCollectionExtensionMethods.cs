using FitnessNotes.BusinessLogic;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Mappings;
using FitnessNotes.BusinessLogic.Implementation.Workouts.Mappings;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.FoodMeasurementUnits.Mappings;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.DefaultExercises.Mappings;

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

            return services;
        }

        public static IServiceCollection AddAutoMapperConfigs(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(WorkoutMappings));
            services.AddAutoMapper(typeof(RoleMappings));
            services.AddAutoMapper(typeof(FoodMeasurementUnitMappings));
            services.AddAutoMapper(typeof(DefaultExerciseMappings));

            return services;
        }

        //public static IServiceCollection AddFitnessNotesCurrentUser(this IServiceCollection services)
        //{
        //    services.AddScoped(s =>
        //    {
        //        var accessor = s.GetService<IHttpContextAccessor>();
        //        var httpContext = accessor.HttpContext;
        //        var claims = httpContext.User.Claims;

        //        var userIdClaim = claims?.FirstOrDefault(c => c.Type == "Id")?.Value;
        //        var isParsingSuccessful = Guid.TryParse(userIdClaim, out Guid id);

        //        return new CurrentUserDto
        //        {
        //            Id = id,
        //            IsAuthenticated = httpContext.User.Identity.IsAuthenticated,
        //            Email = httpContext.User.Identity.Name
        //        };
        //    });

        //    return services;
        //}
    }
}
