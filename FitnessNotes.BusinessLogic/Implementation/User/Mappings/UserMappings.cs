using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.UserProfile.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.UserProfile.Mappings
{
    public class UserMappings : Profile
    {
        public UserMappings() { 
            CreateMap<UpdateUserModel, User>();
            CreateMap<User, GetUserModel> ();
        }
    }
}
