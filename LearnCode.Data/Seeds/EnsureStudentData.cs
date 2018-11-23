using LearnCode.Data.Database;
using LearnCode.Domain.ProgrammingLanguages;
using LearnCode.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace LearnCode.Data.Seeds
{
    public static class EnsureStudentData
    {
        public static void Seed(LearnCodeContext _context)
        {
            if(_context.Students.FirstOrDefault() == null)
            {
                List<PLItem> newStudentItems1 = new List<PLItem>();
                newStudentItems1.Add(new PLItem("C#", ""));
                newStudentItems1.Add(new PLItem("Swift", ""));
                Student newStudent = new Student("Ali Alhaddad", "AA1997", "Lifelong student", "student@lc", "avatar", "Stock at Target", "Lakes High School", 
                                     "High School Diploma", 2015, newStudentItems1, new SubscriptionStatus("basic", 0.00));

                Student newStudent2 = new Student("Jasmine Alhaddad", "jaz_1994", "Lifelong student", "jazz@lc", "avatar", "Cashier at JCPenney", "Spring Valley High School",
                                     "High School Diploma", 2012, newStudentItems1, new SubscriptionStatus("basic", 0.00));
                _context.Students.Add(newStudent);
                _context.Students.Add(newStudent2);
                _context.SaveChanges();
            }
        }
    }
}
