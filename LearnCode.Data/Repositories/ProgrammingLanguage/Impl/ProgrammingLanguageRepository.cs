using System;
using System.Collections.Generic;
using System.Text;
//import your db context using a directive.
using LearnCode.Data.Database;
//IMport your domain models that will be the structure of the data that you will be retrieving
using LearnCode.Domain.ProgrammingLanguages;

namespace LearnCode.Data.Repositories.ProgrammingLanguage.Impl
{
    public class ProgrammingLanguageRepository : IProgrammingLanguageRepository
    {
        private LearnCodeContext _context;
        //Define your constructor that will take a db context 
        public ProgrammingLanguageRepository(LearnCodeContext context)
        {
            _context = context;
        }
        public IEnumerable<PLItem> GetPLs()
        {
            IEnumerable<PLItem> Pls = _context.ProgrammingLanguages;
            return Pls;
        }
    }
}
