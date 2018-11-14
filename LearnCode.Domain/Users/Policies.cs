using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
     //Add a persistance layer to your Roles class as a static class.
    public static class Policies
    {
        //Define your variables holding all the roles of the users.
        private const string SystemAdmin = Roles.SystemAdmin;
        private const string Student = Roles.Student;
        private const string Educator = Roles.Educator;
    }
}
