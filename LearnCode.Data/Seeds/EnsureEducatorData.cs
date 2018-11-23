using LearnCode.Data.Database;
using LearnCode.Domain.ProgrammingLanguages;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LearnCode.Domain.Users;

namespace LearnCode.Data.Seeds
{
    public static class EnsureEducatorData
    {
        public static void Seed(LearnCodeContext _context)
        {
            if(_context.Educators.FirstOrDefault() == null)
            {
                List<PLItem> newEducatorItems1 = new List<PLItem>();
                newEducatorItems1.Add(new PLItem("Javascript", "http://res.cloudinary.com/aa1997/image/upload/t_media_lib_thumb/v1534738803/javascript.jpg"));
                newEducatorItems1.Add(new PLItem("HTML5", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/html5.png"));
                Educator newEducator1 = new Educator("Mohamad Alhaddad", "mo_1999", "Developer and Entrepenuer", "mohamadalhaddad25@gmail.com",
                                        "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png", newEducatorItems1, "Web Developer",
                                        "Adult Education of Las Vegas", "High School Diploma", 2018, newEducatorItems1);
                Educator newEducator2 = new Educator("Ali Alhaddad", "ali_1997", "Developer and Life Long Educator", "devmtnali@gmail.com",
                                        "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png", newEducatorItems1, "Software Engineer",
                                        "Lakes High School", "High School Diploma", 2015, newEducatorItems1);
                Educator newEducator3 = new Educator("Lebron James", "lbj23", "Best basketball player of all time", "lbj23@gmail.com",
                                        "https://intellihr.com.au/wp-content/uploads/2017/06/avatar_placeholder_temporary.png", newEducatorItems1, "The GOAT",
                                        "Akron High School", "High School Diploma", 2003, newEducatorItems1);
                _context.Educators.Add(newEducator1);
                _context.Educators.Add(newEducator2);
                _context.Educators.Add(newEducator3);
                _context.SaveChanges();
            }
        }
    }
}
