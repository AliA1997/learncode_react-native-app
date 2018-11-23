using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Tutorials
{
    public class Criticism : Entity
    {
        private Criticism() { }
        public Criticism(AuthorItem critic, string body, double rating, Guid tutorialId, Guid educatorId)
        {
            Critic = critic;
            Body = body;
            Rating = rating;
            TutorialId = tutorialId;
            EducatorId = educatorId;
        }
        [ForeignKey("Tutorials")]
        public Guid TutorialId { get; set; }
        [ForeignKey("Educators")] 
        public Guid EducatorId { get; set; }
        public AuthorItem Critic { get; set; }
        public string Body { get; set; }
        public double Rating { get; set; }
    }
}
