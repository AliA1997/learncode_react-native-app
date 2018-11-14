using LearnCode.Data.Database;
using LearnCode.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace LearnCode.Data.Repositories.User.Impl
{
    public class EducatorRepository : IEducatorRepository
    {
        private LearnCodeContext _context;
        public EducatorRepository(LearnCodeContext context)
        {
            _context = context;
        }
        public IEnumerable<Educator> GetEducators()
        {
            IEnumerable<Educator> educators = _context.Educators;
            return educators.Select(educator => educator).Take(10);
        }
    }
}
