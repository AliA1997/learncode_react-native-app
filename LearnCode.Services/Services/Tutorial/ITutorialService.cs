using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using LearnCode.Services.ViewModels.Tutorials;

namespace LearnCode.Services.Services.Tutorial
{
    public interface ITutorialService
    {
        Task<IEnumerable<TutorialViewModel>> GetAllTutorials();
        Task<IEnumerable<TutorialViewModel>> GetTutorials(string filter, string value);
        TutorialViewModel GetTutorial(Guid tutorialId);
        Task AddCriticism(CriticismViewModel newCriticism);
    }
}
