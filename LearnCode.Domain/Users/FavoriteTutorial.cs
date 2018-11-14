using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class FavoriteTutorial : Entity
    {
        private FavoriteTutorial() { }
        public FavoriteTutorial(string link, string title, string subject)
        {
            Link = link;
            Title = title;
            Subject = subject;
        }
        public string Link { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
    }
}
