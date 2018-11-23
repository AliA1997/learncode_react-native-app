using LearnCode.Domain.Users;
using LearnCode.Services.Factory;
using LearnCode.Services.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearnCode.Services.Services.User.Impl
{
    public class UserService : IUserService
    {
        private UserManager<LearnCodeUser> _userManager;
        public UserService(UserManager<LearnCodeUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<UserViewModel> CreateUserWithRole(LearnCodeUser user)
        {
            var assignedRoles = await _userManager.GetRolesAsync(user);

            return ModelFactory.CreateViewModel(user, assignedRoles.First());
        }

        public async Task<UserViewModel> GetUser(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if(user == null)
            {
                throw new Exception();
            }
            return await CreateUserWithRole(user);
        }
    }
}
