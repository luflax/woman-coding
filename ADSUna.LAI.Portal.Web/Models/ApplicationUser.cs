using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Models
{
    [Table("AspNetUsers")]
    public class ApplicationUser : IdentityUser
    {
        public string JobTitle { get; set; }
        public string FullName { get; set; }
        public string City { get; set; }
        public string AboutMe { get; set; }
    }
    public class User
    {
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string NewPassword { get; set; }
        //gercy.campos -> new fields: 18/11/2019 
        public string JobTitle { get; set; }
        public string FullName { get; set; }
        public string City { get; set; }
        public string AboutMe { get; set; }
    }
    public class TokenConfigurations
    {
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int Seconds { get; set; }
    }
}
