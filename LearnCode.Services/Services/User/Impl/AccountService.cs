using LearnCode.Domain.Users;
using LearnCode.Services.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LearnCode.Services.Services.User.Impl
{
    public class AccountService : IAccountService
    {
        private IConfiguration _configuration;
        private SignInManager<LearnCodeUser> _signInManager;
        private UserManager<LearnCodeUser> _userManager;
        private IUserService _userService;
        public AccountService(IConfiguration configuration, SignInManager<LearnCodeUser> signInManager, UserManager<LearnCodeUser> userManager, IUserService userService)
        {
            _configuration = configuration;
            _signInManager = signInManager;
            _userManager = userManager;
            _userService = userService;
        }

        public async Task<LoginReturnViewModel> AttemptLogin(LoginViewModel loginForm)
        {
            var result = await _signInManager.PasswordSignInAsync(loginForm.Email, loginForm.Password, false, false);
            //If the result is not succeeded then it will return a exception.
            if(result.Succeeded)
            {
                var userToReturn = await _userService.GetUser(loginForm.Email);
                return new LoginReturnViewModel()
                {
                    AccessToken = new object(),
                    ExpiresIn = "Expire Token",
                    Identity = userToReturn
                };
            }
            else
            {
                throw new Exception();
            }
        }
    }
}
