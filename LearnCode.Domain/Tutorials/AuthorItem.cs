using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Tutorials
{
    public class AuthorItem : Entity
    {
        private AuthorItem() { }
        public AuthorItem(string name, string intro)
        {
            Name = name;
            Intro = intro;
        }
        [ForeignKey("Tutorials")]
        public Guid TutorialId { get; set; }
        public string Name { get; set; }
        public string Intro { get; set; }
    }
}
