using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class SubscriptionStatus : Entity
    {
        private SubscriptionStatus() { }
        public SubscriptionStatus(string subscription, double price)
        {
            if (subscription == "basic") Subscription = TypeOfSubscriptions.Basic;
            else if (subscription == "premium") Subscription = TypeOfSubscriptions.Premium;
            else Subscription = subscription;
            Price = price;
        }
        public string Subscription { get; set; }
        public double Price { get; set; }
    }
}
