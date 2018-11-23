using LearnCode.Data.Database;
using LearnCode.Domain.Users;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LearnCode.Data.Seeds
{
    public static class EnsureRoles
    {
        public static void Seed(LearnCodeContext context)
        {
            if(!context.Roles.Any())
            {
                var userRoles = Roles.All.Select(role => new IdentityRole(role) { NormalizedName = role.ToUpper() });
                context.Roles.AddRange(userRoles);
                context.SaveChanges();
            }
        }
    }
}
