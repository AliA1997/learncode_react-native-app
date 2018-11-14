using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LearnCode.Data.Repositories.User;
using LearnCode.Services.ViewModels.Users;
using LearnCode.Services.Factory;

namespace LearnCode.Services.Services.User.Impl
{
    public class StudentService : IStudentService
    {
        //Define your private variable which would be type of UserRepository
        private IStudentRepository _repository;
        public StudentService(IStudentRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<StudentViewModel> GetStudents()
        {
            IEnumerable<StudentViewModel> students = _repository.GetStudents().Select(student => ModelFactory.CreateViewModel(student));
            return students;
        }
    }
}
