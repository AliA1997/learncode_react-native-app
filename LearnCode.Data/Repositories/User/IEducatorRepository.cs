using LearnCode.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Data.Repositories.User
{
    public interface IEducatorRepository
    {
        IEnumerable<Educator> GetEducators();
    }
}
