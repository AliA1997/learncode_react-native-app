using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using LearnCode.Data.Database;
using Microsoft.EntityFrameworkCore;
using LearnCode.Data.Seeds;

namespace LearnCode.Web
{
    public class Program
    {
        public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
            .AddEnvironmentVariables()
            .Build();
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);
            using (var scope = host.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var dbContext = scope.ServiceProvider.GetRequiredService<LearnCodeContext>())
                {
                    dbContext.Database.Migrate();
                }
            }

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var dbContext = services.GetRequiredService<LearnCodeContext>();
                    EnsureProgrammingLanguageData.Seed(dbContext);
                    EnsureEducatorData.Seed(dbContext);
                    EnsureStudentData.Seed(dbContext);
                    EnsureTutorialData.Seed(dbContext);
                    EnsureRoles.Seed(dbContext);
                }
                catch(Exception ex)
                {
                    Log.Error(ex, "Seeding database error!");
                }
            }

            try
            {
                Log.Information("Running web host!");
                host.Run();
            }
            catch(Exception ex)
            {
                Log.Error(ex, "Running web host error!");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }


        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
