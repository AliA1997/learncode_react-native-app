using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace LearnCode.Services.ViewModels.Users
{
    public class FavoriteTutorialViewModel
    {
        public string Link { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
    }
}
