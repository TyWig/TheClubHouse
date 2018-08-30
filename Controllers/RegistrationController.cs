using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheClubHouse.ViewModels;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using TheClubHouse.Db.Models;
using TheClubHouse.Helpers;
using TheClubHouse.Db;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheClubHouse.Controllers
{
    [Route("api/[controller]")]
    public class RegistrationController : Controller
    {
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly ApplicationDbContext _dbContext;

        public RegistrationController(IMapper mapper, UserManager<AppUser> userManager, ApplicationDbContext dbContext)
        {
            _mapper = mapper;
            _userManager = userManager;
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegistrationViewModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);
            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if(!result.Succeeded)
            {
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            }

            await _dbContext.Users.AddAsync(new User { IdentityId = userIdentity.Id, Location = model.PhoneNumber });
            await _dbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}
