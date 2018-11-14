using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class StripePayment : Entity
    {
        private StripePayment() { }
        public StripePayment(string token, double amount, string cardholderName, string address1, 
                            string address2, string addressPostcode, string addressCountry, string addressCity)
        {
            Token = token;
            Amount = amount;
            CardHolderName = cardholderName;
            AddressLine1 = address1;
            AddressLine2 = address2;
            AddressPostCode = addressPostcode;
            AddressCountry = addressCountry;
            AddressCity = addressCity;
        }
        public string Token { get; set; }
        public double Amount { get; set; }
        public string CardHolderName { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressCity { get; set; }
        public string AddressPostCode { get; set; }
        public string AddressCountry { get; set; }
        public IEnumerable<Fee> Fees { get; set; }
    }
}
