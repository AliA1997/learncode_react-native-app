using LearnCode.Services.ViewModels.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Services.Services.User
{
    public interface IEducatorService
    {
        IEnumerable<EducatorViewModel> GetEducators();
    }
}
