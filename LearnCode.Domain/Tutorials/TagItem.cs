using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Tutorials
{
    public class TagItem : Entity
    {
        private TagItem() { }
        public TagItem(string title)
        {
            Title = title;
        }
        [ForeignKey("Tutorials")]
        public Guid TutorialId { get; set; }
        public string Title { get; set; }
    }
}
