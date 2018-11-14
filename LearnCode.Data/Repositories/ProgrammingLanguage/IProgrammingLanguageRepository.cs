using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Domain.ProgrammingLanguages;

namespace LearnCode.Data.Repositories.ProgrammingLanguage
{
    public interface IProgrammingLanguageRepository
    {
        IEnumerable<PLItem> GetPLs();
    }
}
