using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels.Tutorials;

namespace LearnCode.Services.Services.Tutorial
{
    public interface ITutorialService
    {
        IEnumerable<TutorialViewModel> GetAllTutorials();
        IEnumerable<TutorialViewModel> GetTutorials(string filter, string value);
        TutorialViewModel GetTutorial(string title);
    }
}
