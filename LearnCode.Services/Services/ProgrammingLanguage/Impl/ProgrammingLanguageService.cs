using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LearnCode.Data.Repositories.ProgrammingLanguage;
using LearnCode.Services.ViewModels;
using LearnCode.Services.Factory;
using LearnCode.Services.ViewModels.ProgrammingLanguages;

namespace LearnCode.Services.Services.ProgrammingLanguage.Impl
{
    public class ProgrammingLanguageService : IProgrammingLanguageService
    {
        //Define a private variable with a type of IProgrammingLanguageRepository.
        private IProgrammingLanguageRepository _repository;
        public ProgrammingLanguageService(IProgrammingLanguageRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<PLViewModel> GetPLs()
        {
            IEnumerable<PLViewModel> ProgrammingLanguages = _repository.GetPLs().Select(pl => ModelFactory.CreateViewModel(pl));
            return ProgrammingLanguages;   
        }
   
    }
}
