using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TheClubHouse.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class AuthController : Controller
    {
        public AuthController()
        {

        }

        [HttpPost("[action]")]
        public HttpResponseMessage Login([FromBody] LoginRequest request)
        {
            return new HttpResponseMessage();
        }
    }

    public class LoginRequest
    {
        public string Username {get;set;}
        public string Password {get;set;}
    }
}