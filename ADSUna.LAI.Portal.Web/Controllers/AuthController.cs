using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using ADSUna.LAI.Portal.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ADSUna.LAI.Portal.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
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
            if (usuario != null && !String.IsNullOrWhiteSpace(usuario.Login))
            {
                // Verifica a existência do usuário nas tabelas do
                // ASP.NET Core Identity
                var userIdentity = userManager
                    .FindByNameAsync(usuario.Login).Result;
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
                //ClaimsIdentity identity = new ClaimsIdentity(
                //    new GenericIdentity(usuario.Login, "Login"),
                //    new[] {
                //        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                //        new Claim(JwtRegisteredClaimNames.UniqueName, usuario.Login)
                //    }
                //);

                DateTime dataCriacao = DateTime.Now;
                DateTime dataExpiracao = dataCriacao +
                    TimeSpan.FromSeconds(tokenConfigurations.Seconds);

                var handler = new JwtSecurityTokenHandler();
                var securityToken = handler.CreateToken(new SecurityTokenDescriptor
                {
                    Issuer = tokenConfigurations.Issuer,
                    Audience = tokenConfigurations.Audience,
                    SigningCredentials = signingConfigurations.SigningCredentials,
                    //Subject = identity,
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
                EmailConfirmed = true
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
    }
}