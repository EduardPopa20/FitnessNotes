using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FitnessNotes.DataAccess.Context;
using FitnessNotes.DataAccess.Entities;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles;
using FitnessNotes.BusinessLogic.Implementation.AdminNomenclators.Roles.Models;

namespace FitnessNotes.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {

        private readonly RoleService roleService;
        public RolesController(RoleService roleService)
        {
            this.roleService = roleService;
        }

        [HttpGet]
        public async Task<IActionResult> GetRoles()
        {
            var rolesModel = await roleService.GetAllRoles();

            return rolesModel == null ? NotFound() : Ok(rolesModel);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetRole(int id)
        {
            var roleModel = await roleService.GetRoleById(id);

            return roleModel == null ? NotFound() : Ok(roleModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRole(int id, RoleModel role)
        {
            var updatedRole = await roleService.UpdateRole(id, role);

            return updatedRole == null ? NotFound() : Ok();
        }

        [HttpPost]
        public IActionResult PostRole(RoleModel role)
        {
            var createdRole = roleService.CreateRole(role);

            return createdRole == null ? BadRequest() : Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(int id)
        {
            try
            {
                roleService.DeleteRoleById(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
