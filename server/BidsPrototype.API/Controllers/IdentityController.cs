using System.Threading.Tasks;
using BidsPrototype.API.Models.Identity;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace BidsPrototype.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly IIdentityService _identityService;

        public IdentityController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost("/api/v1/login")]
        public async Task<ActionResult<LoginResultViewModel>> Login(LoginInputModel inputModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Account account = await _identityService.LoginUserAsync(inputModel.Username, inputModel.Password);

            if (account == null)
            {
                return BadRequest("Invalid credentials");
            }

            var result = new LoginResultViewModel()
            {
                UserId = account.User.Id,
                Username = account.Username
            };

            return result;
        }
    }
}