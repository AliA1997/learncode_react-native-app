using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Services.ViewModels.Tutorials
{
    public class CriticismViewModel
    {
        public AuthorViewModel Critic { get; set; }
        public Guid TutorialId { get; set; }
        public Guid EducatorId { get; set; }
        public string Body { get; set; }
        public double Rating { get; set; }
    }
}
