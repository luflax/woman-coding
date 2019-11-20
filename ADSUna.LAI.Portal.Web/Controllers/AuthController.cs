using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ADSUna.LAI.Portal.Web.Data;
using ADSUna.LAI.Portal.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace ADSUna.LAI.Portal.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly CustomIdentityDbContext _context;

        public AuthController(CustomIdentityDbContext context)
        {
            _context = context;
        }

        [HttpGet("ListAllUsers")]
        [Authorize]
        public IEnumerable<ApplicationUser> ListAllUser([FromServices]UserManager<ApplicationUser> userManager)
        {
            return userManager.Users.AsEnumerable();
        }

        // GET: api/CommunityPosts/5
        [HttpGet("getuser/{id}")]
        [Authorize]
        public async Task<IActionResult> GetUser([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public object Login(
            [FromBody]User usuario,
            [FromServices]UserManager<ApplicationUser> userManager,
            [FromServices]SignInManager<ApplicationUser> signInManager,
            [FromServices]SigningConfigurations signingConfigurations,
            [FromServices]TokenConfigurations tokenConfigurations)
        {
            bool credenciaisValidas = false;
            // Verifica a existência do usuário nas tabelas do
            // ASP.NET Core Identity
            var userIdentity = userManager
                .FindByNameAsync(usuario.Login).Result;

            if (usuario != null && !String.IsNullOrWhiteSpace(usuario.Login))
            {
                if (userIdentity != null)
                {
                    // Efetua o login com base no Id do usuário e sua senha
                    var resultadoLogin = signInManager
                        .CheckPasswordSignInAsync(userIdentity, usuario.Password, false)
                        .Result;
                    credenciaisValidas = resultadoLogin.Succeeded;
                    //if (resultadoLogin.Succeeded)
                    //{
                    // Verifica se o usuário em questão possui
                    // a role Acesso-APIAlturas
                    //credenciaisValidas = userManager.IsInRoleAsync(
                    //    userIdentity, Roles.ROLE_API_ALTURAS).Result;
                    //}
                }
            }

            if (credenciaisValidas)
            {
                ClaimsIdentity identity = new ClaimsIdentity(
                    new GenericIdentity(usuario.Login, "Login"),
                    new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, userIdentity.Id),
                        new Claim(JwtRegisteredClaimNames.UniqueName, usuario.Login)
                    }
                );

                DateTime dataCriacao = DateTime.Now;
                DateTime dataExpiracao = dataCriacao +
                    TimeSpan.FromSeconds(tokenConfigurations.Seconds);

                var handler = new JwtSecurityTokenHandler();
                var securityToken = handler.CreateToken(new SecurityTokenDescriptor
                {
                    Issuer = tokenConfigurations.Issuer,
                    Audience = tokenConfigurations.Audience,
                    SigningCredentials = signingConfigurations.SigningCredentials,
                    Subject = identity,
                    NotBefore = dataCriacao,
                    Expires = dataExpiracao
                });
                var token = handler.WriteToken(securityToken);

                return new
                {
                    authenticated = true,
                    created = dataCriacao.ToString("yyyy-MM-dd HH:mm:ss"),
                    expiration = dataExpiracao.ToString("yyyy-MM-dd HH:mm:ss"),
                    accessToken = token,
                    userId = userIdentity.Id,
                    message = "OK"
                };
            }
            else
            {
                return new
                {
                    authenticated = false,
                    message = "Falha ao autenticar"
                };
            }
        }


        [HttpPost("Register")]
        public IActionResult Register([FromServices]UserManager<ApplicationUser> userManager,
                    [FromServices]SignInManager<ApplicationUser> signInManager,
                    [FromBody] User user)
        {


            var ok = userManager.CreateAsync(new ApplicationUser()
            {
                UserName = user.Login,
                Email = user.Email,
                EmailConfirmed = true,
                JobTitle = user.JobTitle,
                AboutMe = user.AboutMe,
                City = user.City,
                FullName = user.FullName
            }, user.Password);

            if (ok.Result.Succeeded)
                return Ok();
            else
                return BadRequest();
        }

        [HttpPost("ChangePassword")]
        public IActionResult ChangePassword([FromServices]UserManager<ApplicationUser> userManager,
            [FromServices]SignInManager<ApplicationUser> signInManager,
            [FromBody] User user)
        {

            ApplicationUser userChange = userManager.FindByNameAsync(user.Login).Result;

            var ok = userManager.ChangePasswordAsync(userChange, user.Password, user.NewPassword);

            if (ok.Result.Succeeded)
                return Ok();
            else
                return BadRequest(ok.Result.Errors);
        }

        [HttpPut("updateuser/{id}")]
        public async Task<IActionResult> UpdateUser([FromServices]UserManager<ApplicationUser> userManager, [FromRoute] string id, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ApplicationUser currentUser = await userManager.FindByIdAsync(id);

            currentUser.JobTitle = user.JobTitle;
            currentUser.Abilities = user.Abilities;
            currentUser.City = user.City;
            currentUser.FullName = user.FullName;
            currentUser.AboutMe = user.AboutMe;

            _context.Entry(currentUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        private bool UserExists(string id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}