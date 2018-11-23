using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
    //Define a static class which will hold all your roles. 
    public static class Roles
    {
        public const string SystemAdmin = "System Admin";
        public const string Institution = "Institution";
        public const string Student = "Student";
        public const string Educator = "Educator";

        //Define a array of all the roles.
        public static string[] All = new string[]
        {
            SystemAdmin,
            Institution,
            Student,
            Educator
        };
    }
}
