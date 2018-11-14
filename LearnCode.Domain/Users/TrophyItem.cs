using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class TrophyItem : Entity
    {
        private TrophyItem() { }
        public TrophyItem(string trophy, int amountOfGoodReviews)
        {
            switch(trophy) {
                case "bronze":
                    Trophy = Trophies.Bronze;
                    break;
                case "silver":
                    Trophy = Trophies.Silver;
                    break;
                case "gold":
                    Trophy = Trophies.Gold;
                    break;
                case "platinum":
                    Trophy = Trophies.Platinum;
                    break;
                default:
                    break;
            }
            AmountOfGoodReviews = amountOfGoodReviews;
        }
        public string Trophy { get; set; }
        public int AmountOfGoodReviews { get; set; }
    }
}
