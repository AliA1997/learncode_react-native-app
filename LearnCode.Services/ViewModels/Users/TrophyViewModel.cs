using System;
using System.Collections.Generic;
using System.Text;
using static LearnCode.Domain.Users.TrophyItem;

namespace LearnCode.Services.ViewModels.Users
{
    public class TrophyViewModel
    {
        public string Trophy { get; set; }
        public int AmountOfGoodReviews { get; set; }
    }
}
