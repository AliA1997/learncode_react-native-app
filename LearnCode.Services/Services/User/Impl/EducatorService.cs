using LearnCode.Data.Repositories.User;
using LearnCode.Services.ViewModels.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LearnCode.Services.Factory;

namespace LearnCode.Services.Services.User.Impl
{
    public class EducatorService : IEducatorService
    {
        private IEducatorRepository _repository;
        public EducatorService(IEducatorRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<EducatorViewModel> GetEducators()
        {
            IEnumerable<EducatorViewModel> educators = _repository.GetEducators().Select(student => ModelFactory.CreateViewModel(student));
            return educators;
        }
    }
}
