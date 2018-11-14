using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
//import your UserRepository interface from your LearnCode.Data.Repositories.User;
using LearnCode.Data.Repositories.User;
//import your LearnCodeContext
using LearnCode.Data;
using LearnCode.Data.Database;
using LearnCode.Domain.Users;

namespace LearnCode.Data.Repositories.User.Impl
{
    public class StudentRepository : IStudentRepository
    {
        private LearnCodeContext _context;
        public StudentRepository(LearnCodeContext context)
        {
            _context = context;
        }
        public IEnumerable<Student> GetStudents()
        {
            IEnumerable<Student> students = _context.Students;
            return students.Select(student => student).Take(10);
        }
    }
}
