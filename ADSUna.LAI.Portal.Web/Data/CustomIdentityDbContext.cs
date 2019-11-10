using ADSUna.LAI.Portal.Web.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Data
{
    public class CustomIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public CustomIdentityDbContext(DbContextOptions options) :base(options)
        {

        }
    }
}
