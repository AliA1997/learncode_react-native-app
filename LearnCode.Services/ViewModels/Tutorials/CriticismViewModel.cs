using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Services.ViewModels.Tutorials
{
    public class CriticismViewModel
    {
        public AuthorViewModel Critic { get; set; }
        public string Body { get; set; }
    }
}
