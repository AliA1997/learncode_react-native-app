using LearnCode.Services.ViewModels.Users;

namespace LearnCode.Services.Services.User
{
    public class LoginReturnViewModel
    {
        public object AccessToken { get; set; }
        public string ExpiresIn { get; set; }
        public UserViewModel Identity { get; set; }
    }
}