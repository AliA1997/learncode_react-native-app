using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Tutorials;

namespace LearnCode.Data.Repositories.Tutorial
{
    public interface ITutorialRepository
    {
        IEnumerable<TutorialItem> GetAllTutorials();
        IEnumerable<TutorialItem> GetTutorials(string filter, string value);
        TutorialItem GetTutorial(string title);
    }
}
