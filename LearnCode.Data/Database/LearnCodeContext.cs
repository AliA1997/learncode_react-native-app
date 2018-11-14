using System;
using System.Collections.Generic;
using System.Text;
using Pomelo.EntityFrameworkCore.MySql;
using Microsoft.EntityFrameworkCore;
using LearnCode.Domain.ProgrammingLanguages;
using LearnCode.Domain.Tutorials;
using LearnCode.Domain.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace LearnCode.Data.Database
{
    
    public class LearnCodeContext : IdentityDbContext<LearnCodeUser> 
    {
        public LearnCodeContext(DbContextOptions<LearnCodeContext> options) : base(options) { }

        public DbSet<LearnCodeUser> LearnCodeUsers { get; set; }
        public DbSet<PLItem> ProgrammingLanguages { get; set; }
        public DbSet<TutorialItem> Tutorials { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Educator> Educators { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<LearnCodeUser>()
               .HasIndex(user => user.Email)
               .IsUnique();

            builder.Entity<Educator>()
                .HasIndex(educator => educator.Email)
                .IsUnique();

            builder.Entity<Student>()
                .HasIndex(student => student.Email)
                .IsUnique();

            builder.Entity<TutorialItem>()
                .HasIndex(tutorial => tutorial.Title)
                .IsUnique();

            builder.Entity<PLItem>()
                .HasKey(pl => pl.Id);


            builder.HasDefaultSchema("learncode");
        }
    }
    
}
