using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain.ProgrammingLanguages
{
    public class PLItem : Entity
    {
        private PLItem() { }
        //Define a constructor for your Domain will be used to retrieve and create data for your database.
        public PLItem(string name, string image)
        {
            Name = name;
            Image = image;
        }
        public string Name { get; set; }
        public string Image { get; set; }
    }
}
