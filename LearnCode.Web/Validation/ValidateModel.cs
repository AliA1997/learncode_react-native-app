using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace LearnCode.Web.Validation
{
    //We are inheriting the action filter attribute and overriding it onActionExecuting method.
    public class ValidateModel : ActionFilterAttribute
    {
        //We using the base keyword to use the original implementation and if the modelstate is invalid then 
        //will return a ValidationFailedResult, indicating the validation failed.

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            if(!context.ModelState.IsValid)
            {
                context.Result = new ValidationFailedResult(context.ModelState);
            }
        }
    }
    //The validation failed result will inherit from the objectResult, and will override it's constructor
    //by assigning a new instance of the validationresultmodel. Also assigning in constructor a 422 status code. 
    public class ValidationFailedResult : ObjectResult
    {
        public ValidationFailedResult(ModelStateDictionary modelState) : 
            base(new ValidationResultModel(modelState))
        {
            StatusCode = StatusCodes.Status422UnprocessableEntity;
        }
    }
    //Then assign a validationError class which is when there is an error it will return a message, and a field
    public class ValidationError
    {
        //Now assign a json property that will handle any null values.
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Field { get; }

        public string Message { get; }

        public ValidationError(string field, string message)
        {
            //We will if the string is empty if it is return null else return the field.
            Field = field != string.Empty ? field : null;
            
            Message = message;
        }
    }
    //This is the result of the validation
    public class ValidationResultModel
    {
        public string Message { get; }
        public List<ValidationError> Errors { get; }
        //In it's constructor it will automatically assign errors to the Errors Property which is a List of our Defined Validation error class.
        //We will pass the model state into the constructor indicating the state of the application and what errors it is returning.
        public ValidationResultModel(ModelStateDictionary modelState)
        {
            
            Message = "Validation Failed";
            //Assign the errors to the modelstate keys
            Errors = modelState.Keys
                    .SelectMany(key => modelState[key].Errors.Select(x => new ValidationError(key, x.ErrorMessage)))
                    .ToList();
        }
    }
}
