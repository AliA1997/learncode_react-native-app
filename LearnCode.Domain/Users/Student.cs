using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.ProgrammingLanguages;

namespace LearnCode.Domain.Users
{
    public class Student : LearnCodeUser
    {
        public Student() { }
        public Student(string name, string displayName, string intro, string email, string avatar,
                               string occupation, string institution, string education,
                               int? yearOfGraduation, IEnumerable<PLItem> PLItems, SubscriptionStatus subscriptionStatus)
        {
            Name = name;
            DisplayName = displayName;
            Intro = intro;
            Email = email;
            Avatar = avatar;
            Occupation = occupation;
            Education = yearOfGraduation != null ? new EducationItem(institution: institution, education: education, yearOfGraduation: yearOfGraduation)
                        : new EducationItem(institution: institution, education: education, yearOfGraduation: null);
            FavoriteProgammingLanguages = PLItems;
            subscriptionStatus = SubscriptionStatus;
        }
        public IEnumerable<FavoriteTutorial> FavoriteTutorials { get; set; } = new List<FavoriteTutorial>();
        public SubscriptionStatus SubscriptionStatus { get; set; }
        private StripePayment PaymentMethod { get; set; }
        public IEnumerable<StripePayment> Charges { get; set; } = new List<StripePayment>();
    }
}
