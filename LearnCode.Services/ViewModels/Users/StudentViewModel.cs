using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels.ProgrammingLanguages;

namespace LearnCode.Services.ViewModels.Users
{
    public class StudentViewModel : UserViewModel
    {
        public IEnumerable<FavoriteTutorialViewModel> FavoriteTutorials { get; set; }
        public SubscriptionStatusViewModel SubscriptionStatus { get; set; }
        public IEnumerable<StripePaymentViewModel> Charges { get; set; }
    }
}
