using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels.ProgrammingLanguages;

namespace LearnCode.Services.ViewModels.Users
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Intro { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Occupation { get; set; }
        public int ProgrammingExperience { get; set; }
        public EducationViewModel Education { get; set; }
        public IEnumerable<PLViewModel> FavoriteProgammingLanguages { get; set; }
    }
}
