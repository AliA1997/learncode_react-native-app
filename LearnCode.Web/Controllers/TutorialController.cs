using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnCode.Services.Services.Tutorial;
using LearnCode.Services.ViewModels.Tutorials;
using Microsoft.AspNetCore.Mvc;

namespace LearnCode.Web.Controllers
{
    [Route("api/tutorials")]
    public class TutorialController : ControllerBase
    {
        private ITutorialService _tutorialService;
        public TutorialController(ITutorialService tutorialService)
        {
            _tutorialService = tutorialService;
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetAllTutorials()
        {
            IEnumerable<TutorialViewModel> tutorials = await _tutorialService.GetAllTutorials();
            return Ok(tutorials);
        }

        [HttpGet("{filter}/{value}")]
        public async Task<IActionResult> FilterTutorials(string filter, string value)
        {
            IEnumerable<TutorialViewModel> tutorials = await _tutorialService.GetTutorials(filter, value);
            return Ok(tutorials);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetTutorial(Guid id)
        {
            TutorialViewModel tutorial = _tutorialService.GetTutorial(id);
            return Ok(tutorial);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
