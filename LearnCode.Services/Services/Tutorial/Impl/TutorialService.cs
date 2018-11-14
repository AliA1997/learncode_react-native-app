using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LearnCode.Data.Repositories.Tutorial;
using LearnCode.Services.Factory;
using LearnCode.Services.ViewModels;
using LearnCode.Services.Services.Tutorial;
using LearnCode.Services.ViewModels.Tutorials;

namespace LearnCode.Services.Services.Tutorial.Impl
{
    public class TutorialService : ITutorialService 
    {
        //Define a private variable that will hold your tutorial repository.
        private ITutorialRepository _repository;
        public TutorialService(ITutorialRepository repository)
        {
            _repository = repository;
        } 
        public IEnumerable<TutorialViewModel> GetAllTutorials()
        {
            IEnumerable<TutorialViewModel> tutorials = _repository.GetAllTutorials().Select(t => ModelFactory.CreateViewModel(t));
            return tutorials;
        }
        public IEnumerable<TutorialViewModel> GetTutorials(string filter, string value)
        {
            IEnumerable<TutorialViewModel> tutorials = _repository.GetTutorials(filter, value).Select(t => ModelFactory.CreateViewModel(t));
            return tutorials;
        }
        public TutorialViewModel GetTutorial(string title)
        {
            TutorialViewModel tutorial = ModelFactory.CreateViewModel(_repository.GetTutorial(title));
            return tutorial;
        }
    }
}
