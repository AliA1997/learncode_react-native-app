using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using LearnCode.Domain.Tutorials;

namespace LearnCode.Data.Repositories.Tutorial
{
    public interface ITutorialRepository
    {
        Task<IEnumerable<TutorialItem>> GetAllTutorials();
        Task<IEnumerable<TutorialItem>> GetTutorials(string filter, string value);
        TutorialItem GetTutorial(Guid tutorialId);
        Task AddCritism(TutorialItem updatedTutorial);
    }
}
