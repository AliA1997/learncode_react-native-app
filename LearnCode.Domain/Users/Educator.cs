using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.ProgrammingLanguages;
using LearnCode.Domain.Tutorials;
using LearnCode.Domain.Users;

namespace LearnCode.Domain.Users
{
    public class Educator : LearnCodeUser
    {
        private Educator() { }
        public Educator(string name, string username, string intro, string email, string avatar, IEnumerable<PLItem> languageOfExpertise,
                string occupation, string institution, string education,
               int? yearOfGraduation, IEnumerable<PLItem> PLItems)
        {
            Name = name;
            Username = username;
            Intro = intro;
            Email = email;
            Avatar = avatar;
            Occupation = occupation;
            Education = yearOfGraduation != null ? new EducationItem(institution: institution, education: education, yearOfGraduation: yearOfGraduation)
                        : new EducationItem(institution: institution, education: education, yearOfGraduation: null);
            LanguageOfExpertise = languageOfExpertise;
            FavoriteProgammingLanguages = PLItems;
            Trophy = new TrophyItem("bronze", 0);
        }
        public IEnumerable<PLItem> LanguageOfExpertise { get; set; } = new List<PLItem>();
        public TrophyItem Trophy { get; set; }
        public IEnumerable<TutorialItem> Tutorials { get; set; } = new List<TutorialItem>();
        public IEnumerable<Criticism> Reviews { get; set; } = new List<Criticism>();
        private StripePayment BillingMethod { get; set; }
        public IEnumerable<StripePayment> BillingHistory { get; set; } = new List<StripePayment>();
    }
}
