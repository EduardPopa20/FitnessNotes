using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.Auth.Register.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.Auth.Register.Mappings
{
    public class RegisterMappings : Profile
    {
       public RegisterMappings()
       {
            CreateMap<RegisterModel, User>();
       }
    }
}
