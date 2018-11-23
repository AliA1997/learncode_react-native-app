using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnCode.Services.Services.User;
using LearnCode.Services.ViewModels.Users;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LearnCode.Web.Controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private IAccountService _accountService;
        public UserController(IUserService userService, IAccountService accountService)
        {
            _userService = userService;
            _accountService = accountService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody]LoginViewModel loginForm)
        {
            var loginResult = await _accountService.AttemptLogin(loginForm);
            return Ok(loginResult);
       }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
