using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using LearnCode.Domain.ProgrammingLanguages;
using Microsoft.AspNetCore.Identity;

namespace LearnCode.Domain.Users
{
    public class LearnCodeUser : IdentityUser
    {
        //Identity adds a email by default.
       public string Name { get; set; }
       public string PushNotificationToken { get; set; }
       public string DisplayName { get; set; }
       public string Intro { get; set; }
       public string Avatar { get; set; }
       public string Occupation { get; set; }
       public EducationItem Education { get; set; }
       public int ProgrammingExperience { get; set; }
       public IEnumerable<PLItem> FavoriteProgammingLanguages { get; set; } = new List<PLItem>();
    }  
}
