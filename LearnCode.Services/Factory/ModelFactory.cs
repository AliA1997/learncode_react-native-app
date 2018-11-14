using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
//Now import your Domain models from your LearnCOde.Domain
using LearnCode.Domain.ProgrammingLanguages;
using LearnCode.Domain.Tutorials;
using LearnCode.Domain.Users;
//Now Import your ViewModels from your LearnCode.Services.ViewModels
using LearnCode.Services.ViewModels.ProgrammingLanguages;
using LearnCode.Services.ViewModels.Tutorials;
using LearnCode.Services.ViewModels.Users;

namespace LearnCode.Services.Factory
{
    public static class ModelFactory
    {
        //Sub entity domain model creation methods.
        internal static PLItem CreateDomainModel(PLViewModel newProgrammingLanguage)
        {
            return new PLItem(name: newProgrammingLanguage.Name, image: newProgrammingLanguage.Image);
        }

        internal static FavoriteTutorial CreateDomainModel(FavoriteTutorialViewModel newFavoriteTutorial)
        {
            return new FavoriteTutorial(
                link: newFavoriteTutorial.Link,
                title: newFavoriteTutorial.Title,
                subject: newFavoriteTutorial.Subject
            );
        }

        internal static EducationItem CreateDomainModel(EducationViewModel newEducationItem)
        {
            return new EducationItem(
                institution: newEducationItem.Institution,
                education: newEducationItem.Education.ToString(),
                yearOfGraduation: newEducationItem.YearOfGraduation
            );

        }

        internal static SubscriptionStatus CreateDomainModel(SubscriptionStatusViewModel newSubscription)
        {
            return new SubscriptionStatus(
                subscription: newSubscription.Subscription,
                price: newSubscription.Price
            );
        }

        internal static Fee CreateDomainModel(FeeViewModel newFee)
        {
            return new Fee(
                amount: newFee.Amount,
                typeOfFee: newFee.Type.ToString().ToLower(),
                description: newFee.Description
            );  
        }

        internal static StripePayment CreateDomainModel(StripePaymentViewModel newStripePayment)
        {
            return new StripePayment(
                token: newStripePayment.Token,
                amount: newStripePayment.Amount,
                cardholderName: newStripePayment.CardHolderName,
                address1: newStripePayment.AddressLine1,
                address2: newStripePayment.AddressLine2,
                addressPostcode: newStripePayment.AddressPostCode,
                addressCountry: newStripePayment.AddressCountry,
                addressCity: newStripePayment.AddressCity
            );
        }
        //////////////////////////////////////////////////////////////////////////////
        internal static TutorialItem CreateDomainModel(TutorialViewModel newTutorial)
        {
            return new TutorialItem(
                title: newTutorial.Title,
                image: newTutorial.Image,
                subject: newTutorial.Subject,
                //Will return a array of string or a IEnumerable instance of strings.
                tags: newTutorial.Tags.Select(tag => tag.Title),
                authorName: newTutorial.Author.Name,
                authorIntro: newTutorial.Author.Intro
                );
        }
        internal static Student CreateDomainModel(StudentViewModel newStudent)
        {
            return new Student(
                   name: newStudent.Name,
                   username: newStudent.Username,
                   intro: newStudent.Intro,
                   email: newStudent.Email,
                   avatar: newStudent.Avatar,
                   occupation: newStudent.Occupation,
                   institution: newStudent.Education.Institution,
                   education: newStudent.Education.Education.ToString(),
                   yearOfGraduation: newStudent.Education.YearOfGraduation,
                   subscriptionStatus: ModelFactory.CreateDomainModel(newStudent.SubscriptionStatus),
                   PLItems: newStudent.FavoriteProgammingLanguages.Select(pl => ModelFactory.CreateDomainModel(pl))
               );
        }
        internal static Educator CreateDomainModel(EducatorViewModel newEducator)
        {
            return new Educator(
                    name: newEducator.Name,
                    username: newEducator.Username,
                    intro: newEducator.Intro,
                    email: newEducator.Email,
                    avatar: newEducator.Avatar,
                    languageOfExpertise: newEducator.LanguageOfExpertise.Select(le => ModelFactory.CreateDomainModel(le)),
                    occupation: newEducator.Occupation,
                    institution: newEducator.Education.Institution,
                    education: $"{newEducator.Education.Education}",
                    yearOfGraduation: newEducator.Education.YearOfGraduation,
                    PLItems: newEducator.FavoriteProgammingLanguages.Select(pl => ModelFactory.CreateDomainModel(pl))
                );
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////
        ///Sub Entity view model creation models.
        internal static PLViewModel CreateViewModel(PLItem newProgrammingLanguage)
        {
            return new PLViewModel()
            {
                Id = newProgrammingLanguage.Id,
                Name = newProgrammingLanguage.Name,
                Image = newProgrammingLanguage.Image
            };
        }

        internal static FavoriteTutorialViewModel CreateViewModel(FavoriteTutorial newFavoriteTutorial)
        {
            return new FavoriteTutorialViewModel()
            {
                Link = newFavoriteTutorial.Link,
                Title = newFavoriteTutorial.Title,
                Subject = newFavoriteTutorial.Subject
            };
        }

        internal static EducationViewModel CreateViewModel(EducationItem newEducation)
        {
            return new EducationViewModel()
            {
                Education = newEducation.Education,
                Institution = newEducation.Institution,
                YearOfGraduation = newEducation.YearOfGraduation
            };
        }

        internal static SubscriptionStatusViewModel CreateViewModel(SubscriptionStatus newSubscription)
        {
            return new SubscriptionStatusViewModel()
            {
                Subscription = newSubscription.Subscription,
                Price = newSubscription.Price
            };
        }

        internal static FeeViewModel CreateViewModel(Fee newFee)
        {
            return new FeeViewModel()
            {
                Amount = newFee.Amount,
                Description = newFee.Description,
                Type = newFee.Type
            };
        }

        internal static StripePaymentViewModel CreateViewModel(StripePayment newStripePayment)
        {
            return new StripePaymentViewModel()
            {
               Token = newStripePayment.Token,
               Amount = newStripePayment.Amount,
               CardHolderName = newStripePayment.CardHolderName,
               AddressCity = newStripePayment.AddressCity,
               AddressPostCode = newStripePayment.AddressPostCode,
               AddressCountry = newStripePayment.AddressCountry,
               AddressLine1 = newStripePayment.AddressLine1,
               AddressLine2 = newStripePayment.AddressLine2,
               Fees = newStripePayment.Fees.Select(fee => ModelFactory.CreateViewModel(fee))
            };
        }

        internal static TrophyViewModel CreateViewModel(TrophyItem newTrophy)
        {
            return new TrophyViewModel()
            {
                Trophy = newTrophy.Trophy,
                AmountOfGoodReviews = newTrophy.AmountOfGoodReviews
            };
        }
        ///////////////////////////////////////////////////////////////////////////////////////////
        internal static TutorialViewModel CreateViewModel(TutorialItem newTutorial)
        {
            return new TutorialViewModel()
            {
                Id = newTutorial.Id,
                Title = newTutorial.Title,
                Image = newTutorial.Image,
                Subject = newTutorial.Subject,
                Author = new AuthorViewModel()
                {
                    Name = newTutorial.Author.Name,
                    Intro = newTutorial.Author.Intro
                },
                Tags = newTutorial.Tags.Select(t => new TagViewModel() { Title = t.Title })
            };
        }
        internal static StudentViewModel CreateViewModel(Student newStudent)
        {
            return new StudentViewModel()
            {
                Id = new Guid(newStudent.Id),
                Name = newStudent.Name,
                Username = newStudent.Username,
                Email = newStudent.Email,
                Intro = newStudent.Intro,
                Avatar = newStudent.Avatar,
                Occupation = newStudent.Occupation,
                Education = ModelFactory.CreateViewModel(newStudent.Education),
                FavoriteTutorials = newStudent.FavoriteTutorials.Select(ft => ModelFactory.CreateViewModel(ft)),
                FavoriteProgammingLanguages = newStudent.FavoriteProgammingLanguages.Select(pl => ModelFactory.CreateViewModel(pl)),
                SubscriptionStatus = ModelFactory.CreateViewModel(newStudent.SubscriptionStatus),
                Charges = newStudent.Charges.Select(charge => ModelFactory.CreateViewModel(charge)),
                ProgrammingExperience = newStudent.ProgrammingExperience
            };
        }

        internal static EducatorViewModel CreateViewModel(Educator newEducator)
        {
            return new EducatorViewModel()
            {
                Id = new Guid(newEducator.Id),
                Name = newEducator.Name,
                Username = newEducator.Username,
                Email = newEducator.Email,
                Intro = newEducator.Intro,
                Avatar = newEducator.Avatar,
                Occupation = newEducator.Occupation,
                Education = ModelFactory.CreateViewModel(newEducator.Education),
                FavoriteProgammingLanguages = newEducator.FavoriteProgammingLanguages.Select(pl => ModelFactory.CreateViewModel(pl)),
                Tutorials = newEducator.Tutorials.Select(tutorial => ModelFactory.CreateViewModel(tutorial)),
                LanguageOfExpertise = newEducator.LanguageOfExpertise.Select(loe => ModelFactory.CreateViewModel(loe)),
                Trophy = ModelFactory.CreateViewModel(newEducator.Trophy),
                BillingHistory = newEducator.BillingHistory.Select(charge => ModelFactory.CreateViewModel(charge)),
                ProgrammingExperience = newEducator.ProgrammingExperience
            };
        }

    }
}
