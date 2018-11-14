using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Services.ViewModels.Tutorials
{
    public class TutorialViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Subject { get; set; }
        public IEnumerable<TagViewModel> Tags { get; set; }
        public AuthorViewModel Author { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public IEnumerable<CriticismViewModel> Criticisms { get; set; }
    }
}
