using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace LearnCode.Domain.Tutorials
{
    public class TutorialItem : Entity
    {
        private TutorialItem() { }
        public TutorialItem(string title, string image, string subject, string skillLevel, IEnumerable<TagItem> tags, string authorName, string authorIntro)
        {
            Title = title;
            Image = image;
            Subject = subject;
            SkillLevel = skillLevel;
            Tags = tags;
            Author = new AuthorItem(name: authorName, intro: authorIntro);
            DateCreated = DateTime.UtcNow;
        }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Subject { get; set; }
        public string SkillLevel { get; set; }
        public IEnumerable<TagItem> Tags { get; set; } = new List<TagItem>();
        public IEnumerable<Criticism> Criticisms { get; set; } = new List<Criticism>();
        public AuthorItem Author { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }

        public void AddCriticism(Criticism newCriticism)
        {
            Criticisms.Append(newCriticism);
            return;
        }
    }
}
