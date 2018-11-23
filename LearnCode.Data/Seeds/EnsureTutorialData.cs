using LearnCode.Data.Database;
using LearnCode.Domain.Tutorials;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace LearnCode.Data.Seeds
{
    public static class EnsureTutorialData
    {
        public static void Seed(LearnCodeContext _context)
        {
            if(_context.Tutorials.FirstOrDefault() == null)
            {
                List<TagItem> Tags = new List<TagItem>();
                Tags.Add(new TagItem(title: "Javascript"));
                Tags.Add(new TagItem(title: "Web Development"));
                Tags.Add(new TagItem(title: "Programming"));
                TutorialItem newTutorial = new TutorialItem("Basics of Javascripts", "image", "Javascript", "Beginner", Tags, "Mohamad Alhaddad", "Developer and Entrepenuer");
                TutorialItem newTutorial2 = new TutorialItem("Fundamentals of Javascript", "image", "Javascript", "Beginner", Tags, "Ali Alhaddad", "Developer and Life long learner");
                _context.Tutorials.Add(newTutorial);
                _context.Tutorials.Add(newTutorial2);
                _context.SaveChanges();
            }
        }
    }
}
