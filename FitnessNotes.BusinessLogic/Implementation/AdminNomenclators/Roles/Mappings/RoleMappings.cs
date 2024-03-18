using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Models;
using FitnessNotes.DataAccess.Entities;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Mappings
{
    public class RoleMappings : Profile
    {
        public RoleMappings()
        {
            CreateMap<RoleModel, Role>();
            CreateMap<Role, RoleModel>();
        }
    }
}
