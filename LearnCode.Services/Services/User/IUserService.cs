using LearnCode.Domain.Users;
using LearnCode.Services.ViewModels.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LearnCode.Services.Services.User
{
    public interface IUserService
    {
        Task<UserViewModel> GetUser(string email);
        Task<UserViewModel> CreateUserWithRole(LearnCodeUser user);
    }
}
