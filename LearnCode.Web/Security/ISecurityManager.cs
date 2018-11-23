using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearnCode.Web.Security
{
    public interface ISecurityManager
    {
        //Property which is Name
        string Name { get; }
        //Have a method that will return nothing, and will take AuthorizationOptions as a argument.
        void LoadPolicies(AuthorizationOptions options);
    }
}
