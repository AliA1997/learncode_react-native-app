using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.Users;

namespace LearnCode.Data.Repositories.User
{
    public interface IStudentRepository
    {
        IEnumerable<Student> GetStudents();
    }
}
