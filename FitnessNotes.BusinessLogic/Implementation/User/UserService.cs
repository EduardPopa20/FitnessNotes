using FitnessNotes.BusinessLogic.Implementation.UserProfile.Models;
using Microsoft.EntityFrameworkCore;

namespace FitnessNotes.BusinessLogic.Implementation.UserProfile
{
    public class UserService : BaseService
    {
        public UserService(ServiceDependencies dependencies)
            : base(dependencies)
        {
        }

        public async Task<GetUserModel>? GetUserByEmail(string email)
        {
            var user = await UnitOfWork.Users
                .GetAll()
                .FirstOrDefaultAsync(user => user.Email == email);

            if (user == null)
            {
                return null;
            }

            var result = Mapper.Map<GetUserModel>(user);

            return result;
        }
    }
}
