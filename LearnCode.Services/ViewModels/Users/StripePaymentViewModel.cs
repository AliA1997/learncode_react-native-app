using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Services.ViewModels.Users
{
    public class StripePaymentViewModel
    {
        public string Token { get; set; }
        public double Amount { get; set; }
        public string CardHolderName { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressCity { get; set; }
        public string AddressPostCode { get; set; }
        public string AddressCountry { get; set; }
        public IEnumerable<FeeViewModel> Fees { get; set; }
    }
}
