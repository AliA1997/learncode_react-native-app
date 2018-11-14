using System;
using System.Collections.Generic;
using System.Text;
using LearnCode.Services.ViewModels;
using LearnCode.Services.ViewModels.ProgrammingLanguages;

namespace LearnCode.Services.Services.ProgrammingLanguage
{
    public interface IProgrammingLanguageService
    {
        IEnumerable<PLViewModel> GetPLs();
    }
}
