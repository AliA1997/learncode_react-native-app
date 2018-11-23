using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
     //Add a persistance layer to your Roles class as a static class.
    public static class Policies
    {
        //Define your variables holding all the roles of the users.
        public const string SystemAdmin = Roles.SystemAdmin;
        public const string Institution = Roles.Institution;
        public const string Student = Roles.Student;
        public const string Educator = Roles.Educator;
    }
}
