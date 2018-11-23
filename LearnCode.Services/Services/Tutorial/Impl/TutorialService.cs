using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LearnCode.Data.Repositories.Tutorial;
using LearnCode.Services.Factory;
using LearnCode.Services.ViewModels;
using LearnCode.Services.Services.Tutorial;
using LearnCode.Services.ViewModels.Tutorials;
using System.Threading.Tasks;

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
        public async Task<IEnumerable<TutorialViewModel>> GetAllTutorials()
        {
            var tutorials = await _repository.GetAllTutorials();
            return tutorials.Select(t => ModelFactory.CreateViewModel(t));
        }
        public async Task<IEnumerable<TutorialViewModel>> GetTutorials(string filter, string value)
        {
            var tutorials = await _repository.GetTutorials(filter, value);
            return tutorials.Select(t => ModelFactory.CreateViewModel(t));
        }
        public TutorialViewModel GetTutorial(Guid tutorialId)
        {
            TutorialViewModel tutorial = ModelFactory.CreateViewModel(_repository.GetTutorial(tutorialId));
            return tutorial;
        }
        public async Task AddCriticism(CriticismViewModel newCriticism)
        {
            TutorialViewModel tutorialToRetrieve = GetTutorial(newCriticism.TutorialId);
            var tutorialToUpdate = ModelFactory.CreateDomainModel(tutorialToRetrieve);
            var critismToAdd = ModelFactory.CreateDomainModel(newCriticism);
            tutorialToUpdate.AddCriticism(critismToAdd);
            await _repository.AddCritism(tutorialToUpdate);
        }
    }
}
