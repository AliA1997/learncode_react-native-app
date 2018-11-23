using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LearnCode.Services.ViewModels.Users
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Email Address is required!")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password is required!")]
        public string Password { get; set; }
    }
}
