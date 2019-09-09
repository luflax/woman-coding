using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ADSUna.LAI.Portal.Web.Layout.Models;

namespace ADSUna.LAI.Portal.Web.Layout.Data
{
    public class DBAccessContext : DbContext
    {
        public DBAccessContext (DbContextOptions<DBAccessContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }


        public DbSet<Menu> MenuSet { get; set; }
    }
}
