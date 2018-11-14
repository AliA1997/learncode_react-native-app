using System;
//to do database methods witihin your C# using system.linq
using System.Linq;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Tutorials;
//import your COntext using a directive.
using LearnCode.Data.Database;
using Microsoft.EntityFrameworkCore;

namespace LearnCode.Data.Repositories.Tutorial.Impl
{
    public class TutorialRepository : ITutorialRepository
    {
        private LearnCodeContext _context;
        public TutorialRepository(LearnCodeContext context)
        { 
            _context = context;
        } 
        public IEnumerable<TutorialItem> GetAllTutorials()
        {
            IEnumerable<TutorialItem> allTutorials = _context.Tutorials.Take(10);
            return allTutorials;
        }
        public IEnumerable<TutorialItem> GetTutorials(string filter, string value)
        {
            IEnumerable<TutorialItem> filterTutorials;
            if (filter == "Author's Name")
            {
                filterTutorials = _context.Tutorials.Include(t => t.Author.Name == value);
            }
            else if (filter == "Author's Intro")
            {
                filterTutorials = _context.Tutorials.Include(t => t.Author.Intro == value);
            }
            else if (filter == "Tags")
            {
                filterTutorials = _context.Tutorials.Include(t => t.Tags.Where(tag => tag.Title == value));
            }
            else
            {
             filterTutorials = _context.Tutorials.Include(t => (string)t.GetType().GetProperty(filter).GetValue(t, null) == (string)value);
            }
            return filterTutorials;
        }
        public TutorialItem GetTutorial(string title)
        {
            TutorialItem specificTutorial = _context.Tutorials.FirstOrDefault(t => t.Title == title);
            return specificTutorial;
        }
    }
}
