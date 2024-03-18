using AutoMapper;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Models;
using FitnessNotes.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles
{
    public class RoleService : BaseService
    {
        public RoleService(ServiceDependencies dependencies)
            : base(dependencies)
        {
        }

        public async Task<List<RoleModel>>? GetAllRoles()
        {
            var roles = await UnitOfWork.Roles
                .GetAll()
                .ToListAsync();

            if (roles == null)
            {
                return null;
            }

            var result = Mapper.Map<List<Role>, List<RoleModel>>(roles);

            return result;
        }

        public async Task<RoleModel>? GetRoleById(int roleId)
        {
            var role = await UnitOfWork.Roles
                .GetAll()
                .FirstOrDefaultAsync(role => role.Id == roleId);

            if (role == null)
            {
                return null;
            }

            var result = Mapper.Map<RoleModel>(role);

            return result;
        }

        public RoleModel? CreateRole(RoleModel roleModel)
        {
            var newRole = Mapper.Map<Role>(roleModel);

            try
            {
                var result = UnitOfWork.Roles
                    .Insert(newRole);

                UnitOfWork.SaveChanges();
                return roleModel;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<RoleModel>? UpdateRole(int id, RoleModel roleModel)
        {
            var roleEntity = await UnitOfWork.Roles
                .GetAll()
                .FirstOrDefaultAsync(r => r.Id == id);

            if (roleEntity == null)
            {
                return null;
            }

            Mapper.Map(roleModel, roleEntity);

            try
            {
                UnitOfWork.SaveChanges();
            }
            catch
            {
                return null;
            }

            return roleModel;
        }

        public async void DeleteRoleById(int id)
        {
            var roleEntity = await UnitOfWork.Roles
                .GetAll()
                .FirstOrDefaultAsync(r => r.Id == id);

            try
            {
                UnitOfWork.Roles.Delete(roleEntity);
                UnitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
