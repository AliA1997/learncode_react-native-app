using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Users;

namespace LearnCode.Services.ViewModels.Users
{
    public class EducationViewModel
    {
        public string Institution { get; set; }
        public string Education { get; set; }
        public int? YearOfGraduation { get; set; }
    }
}
