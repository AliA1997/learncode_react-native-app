using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class Fee : Entity
    {
        private Fee() { }
        public Fee(double amount, string typeOfFee, string description)
        {
            Amount = amount;
            Type = typeOfFee == "billing" ? TypeOfFee.Billing : TypeOfFee.Subscription;
            Description = description;
        }
        [ForeignKey("LearnCodeUsers")]
        public Guid UserId { get; set; }
        public double Amount { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
    }
}
