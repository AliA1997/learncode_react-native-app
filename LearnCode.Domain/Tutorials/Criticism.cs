using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Tutorials
{
    public class Criticism : Entity
    {
        private Criticism() { }
        public Criticism(AuthorItem author, string body)
        {
            Author = author;
            Body = body;
        }
        [ForeignKey("Tutorials")]
        public Guid? TutorialId { get; set; }
        [ForeignKey("Educators")] 
        public Guid? EducatorId { get; set; }
        public AuthorItem Author { get; set; }
        public string Body { get; set; }
    }
}
