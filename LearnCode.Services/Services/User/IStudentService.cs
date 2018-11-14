using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels.Users;

namespace LearnCode.Services.Services.User
{
    public interface IStudentService
    {
        IEnumerable<StudentViewModel> GetStudents();
    }
}
