using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnCode.Domain.Users
{
    public class EducationItem : Entity
    {
        private EducationItem() { }
        public EducationItem(string institution, string education, int? yearOfGraduation)
        {
            string educationToConvert = education.Replace("@^[a-zA-Z0-9_ ]*$", " ");
            Institution = institution;
            //Have a switch statement based string of the education, assign a value of the Static class.
            switch(educationToConvert)
            {
                case "Certificate":
                    Education = TypeOfEducation.Certificate;
                    break;
                case "Business":
                    Education = TypeOfEducation.Business;
                    break;
                case "Coding Bootcamp":
                    Education = TypeOfEducation.Coding_Bootcamp;
                    break;
                case "High School Diploma":
                    Education = TypeOfEducation.High_School_Diploma;
                    break;
                case "Associate's Degree":
                    Education = TypeOfEducation.Associate_Degree;
                    break;
                case "Bachelor's Degree":
                    Education = TypeOfEducation.Bachelor_Degree;
                    break;
                case "Master's Degree":
                    Education = TypeOfEducation.Master_Degree;
                    break;
                case "Phd":
                    Education = TypeOfEducation.Phd;
                    break;
                default:
                    Education = TypeOfEducation.Other;
                    break;
            }
            //If the year of graduation is not null, assign it to the YearOfGraduation property.
            if (yearOfGraduation != null) YearOfGraduation = yearOfGraduation;
        }
        [ForeignKey("LearnCodeUsers")]
        public Guid UserId { get; set; }
        public string Institution { get; set; }
        public string Education { get; set; }
        public int? YearOfGraduation { get; set; }
    }
}
