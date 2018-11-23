using LearnCode.Data.Database;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LearnCode.Domain.ProgrammingLanguages;
using System.Threading.Tasks;

namespace LearnCode.Data.Seeds
{
    public static class EnsureProgrammingLanguageData
    {
        public static void Seed(LearnCodeContext _context)
        {

            if(_context.ProgrammingLanguages.FirstOrDefault() == null)
            {
         
                PLItem javascript = new PLItem("Javascript", "http://res.cloudinary.com/aa1997/image/upload/t_media_lib_thumb/v1534738803/javascript.jpg");
                _context.ProgrammingLanguages.AddAsync(javascript);
                PLItem csharp = new PLItem("C#", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/c.png");
                _context.ProgrammingLanguages.AddAsync(csharp);
                PLItem swift = new PLItem("Swift", "https://res.cloudinary.com/aa1997/image/upload/v1534738804/swift.png");
                _context.ProgrammingLanguages.AddAsync(swift);
                PLItem html5 = new PLItem("HTML5", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/html5.png");
                _context.ProgrammingLanguages.AddAsync(html5);
                PLItem css3 = new PLItem("CSS3", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/css3.png");
                _context.ProgrammingLanguages.AddAsync(css3);
                PLItem Cplusplus = new PLItem("C++", "https://res.cloudinary.com/aa1997/image/upload/v1542867266/c.jpg");
                _context.ProgrammingLanguages.AddAsync(Cplusplus);
                PLItem ruby = new PLItem("Ruby", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/ruby.png");
                _context.ProgrammingLanguages.AddAsync(ruby);
                PLItem php = new PLItem("PHP", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/PHP.png");
                _context.ProgrammingLanguages.AddAsync(php);
                PLItem python = new PLItem("Python", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/python.png");
                _context.ProgrammingLanguages.AddAsync(python);
                PLItem typescript = new PLItem("Typescript", "https://res.cloudinary.com/aa1997/image/upload/v1534738804/typescript.svg");
                _context.ProgrammingLanguages.AddAsync(typescript);
                PLItem rust = new PLItem("Rust", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/rust.png");
                _context.ProgrammingLanguages.AddAsync(rust);
                PLItem java = new PLItem("Java", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/java.png");
                _context.ProgrammingLanguages.AddAsync(java);
                PLItem perl = new PLItem("Perl", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/perl.png");
                _context.ProgrammingLanguages.AddAsync(perl);
                PLItem elixir = new PLItem("Elixir", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/elixir.jpg");
                _context.ProgrammingLanguages.AddAsync(elixir);
                PLItem objectiveC = new PLItem("Objective C", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/objective-c.png");
                _context.ProgrammingLanguages.AddAsync(objectiveC);
                PLItem scala = new PLItem("Scala", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/scala.png");
                _context.ProgrammingLanguages.AddAsync(scala);
                PLItem jade = new PLItem("Jade", "https://res.cloudinary.com/aa1997/image/upload/v1534738803/jade.png");
                _context.ProgrammingLanguages.AddAsync(jade);
                PLItem matlab = new PLItem("Matlab", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/matlab.png");
                _context.ProgrammingLanguages.AddAsync(matlab);
                PLItem lua = new PLItem("Lua", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/lua.png");
                _context.ProgrammingLanguages.AddAsync(lua);
                PLItem coffeescript = new PLItem("CoffeeScript", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/coffeescript.png");
                _context.ProgrammingLanguages.AddAsync(coffeescript);
                PLItem kotlin = new PLItem("Kotlin", "https://res.cloudinary.com/aa1997/image/upload/v1534738802/kotlin.png");
                _context.ProgrammingLanguages.AddAsync(kotlin);
                PLItem sql = new PLItem("SQL", "https://res.cloudinary.com/aa1997/image/upload/v1534738804/sql.png");
                _context.ProgrammingLanguages.AddAsync(sql);
                _context.SaveChangesAsync();
            }
        }
    }
}
