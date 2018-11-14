using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Users;

namespace LearnCode.Services.ViewModels.Users
{
    public class FeeViewModel
    {
        public double Amount { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
    }
}
