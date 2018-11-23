using LearnCode.Services.ViewModels.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LearnCode.Services.Services.User
{
    public interface IAccountService
    {
        Task<LoginReturnViewModel> AttemptLogin(LoginViewModel loginForm);
    }
}
