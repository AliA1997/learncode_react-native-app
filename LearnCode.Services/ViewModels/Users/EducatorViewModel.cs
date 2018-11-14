using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels.ProgrammingLanguages;
using LearnCode.Services.ViewModels.Tutorials;

namespace LearnCode.Services.ViewModels.Users
{
    public class EducatorViewModel : UserViewModel
    {
        public IEnumerable<TutorialViewModel> Tutorials { get; set; }
        public IEnumerable<PLViewModel> LanguageOfExpertise { get; set; }
        public TrophyViewModel Trophy { get; set; }
        public IEnumerable<StripePaymentViewModel> BillingHistory { get; set; }
    }
}
