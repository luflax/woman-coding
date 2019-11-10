using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Models
{
    public class ApplicationUser : IdentityUser
    {
    }
    public class User
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string NewPassword { get; set; }
    }
    public class TokenConfigurations
    {
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int Seconds { get; set; }
    }
}
