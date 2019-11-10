using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ADSUna.LAI.Portal.Web.Models
{
    public class DBAccessContext : DbContext
    {
        public DBAccessContext (DbContextOptions<DBAccessContext> options)
            : base(options)
        {
            //this.Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }


        public DbSet<ADSUna.LAI.Portal.Web.Models.Aluno> Aluno { get; set; }
    }
}
