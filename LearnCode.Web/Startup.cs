using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnCode.Data.Database;
using LearnCode.Data.Repositories.ProgrammingLanguage;
using LearnCode.Data.Repositories.ProgrammingLanguage.Impl;
using LearnCode.Data.Repositories.Tutorial;
using LearnCode.Data.Repositories.Tutorial.Impl;
using LearnCode.Data.Repositories.User;
using LearnCode.Data.Repositories.User.Impl;
using LearnCode.Services.Services.ProgrammingLanguage;
using LearnCode.Services.Services.ProgrammingLanguage.Impl;
using LearnCode.Services.Services.Tutorial;
using LearnCode.Services.Services.Tutorial.Impl;
using LearnCode.Services.Services.User;
using LearnCode.Services.Services.User.Impl;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace LearnCode.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            string connectionString = Configuration["ConnectionStrings:learncode"];
            services.AddDbContext<LearnCodeContext>(options => options.UseMySql(connectionString));
            //NOw add your services, and repositories to your services scope.
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<IEducatorRepository, EducatorRepository>();
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<IEducatorService, EducatorService>();
            services.AddScoped<IProgrammingLanguageRepository, ProgrammingLanguageRepository>();
            services.AddScoped<IProgrammingLanguageService, ProgrammingLanguageService>();
            services.AddScoped<ITutorialRepository, TutorialRepository>();
            services.AddScoped<ITutorialService, TutorialService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
