using System;
//to do database methods witihin your C# using system.linq
using System.Linq;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Tutorials;
//import your COntext using a directive.
using LearnCode.Data.Database;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace LearnCode.Data.Repositories.Tutorial.Impl
{
    public class TutorialRepository : ITutorialRepository
    {
        private LearnCodeContext _context;
        public TutorialRepository(LearnCodeContext context)
        { 
            _context = context;
        } 
        public async Task<IEnumerable<TutorialItem>> GetAllTutorials()
        {
            IEnumerable<TutorialItem> allTutorials = await _context.Tutorials.ToListAsync();
            return allTutorials;
        }
        public async Task<IEnumerable<TutorialItem>> GetTutorials(string filter, string value)
        {
            IEnumerable<TutorialItem> filterTutorials;
            if (filter == "Author's Name")
            {
                filterTutorials = await _context.Tutorials.Include(t => t.Author.Name == value).ToListAsync();
            }
            else if (filter == "Author's Intro")
            {
                filterTutorials = await _context.Tutorials.Include(t => t.Author.Intro == value).ToListAsync();
            }
            else if (filter == "Tags")
            {
                filterTutorials = await _context.Tutorials.Include(t => t.Tags.Where(tag => tag.Title == value)).ToListAsync();
            }
            else
            {
             filterTutorials = await _context.Tutorials.Include(t => (string)t.GetType().GetProperty(filter).GetValue(t, null) == (string)value).ToListAsync();
            }
            return filterTutorials;
        }
        public TutorialItem GetTutorial(Guid tutorialId)
        {
            TutorialItem specificTutorial = _context.Tutorials.FirstOrDefault(t => t.Id == tutorialId);
            return specificTutorial;
        }
        public async Task AddCritism(TutorialItem updatedTutorial)
        {
            _context.Tutorials.Update(updatedTutorial);
            _context.Criticisms.Update(updatedTutorial.Criticisms.Last());
            await _context.SaveChangesAsync();
        }
    }
}
