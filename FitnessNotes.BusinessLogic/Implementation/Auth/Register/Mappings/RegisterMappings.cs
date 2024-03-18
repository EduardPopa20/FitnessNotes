using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Register.Mappings
{
    public class RegisterMappings : Profile
    {
       public RegisterMappings()
        {
            CreateMap<RegisterModel, User>()
                .ForMember(dest => dest.HashedPassword, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.RoleId, opt => opt.Ignore())
                .ForMember(dest => dest.CustomExercises, opt => opt.Ignore())
                .ForMember(dest => dest.Role, opt => opt.Ignore());
        }
    }
}
