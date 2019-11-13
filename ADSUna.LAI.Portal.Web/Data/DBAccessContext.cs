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
            modelBuilder.Entity<CommunityPost>().Property(e => e.PostId).HasDefaultValueSql("newid()");
        }


        public DbSet<Aluno> Aluno { get; set; }
        public DbSet<CommunityPost> CommunityPostDbSet { get; set; }
        public DbSet<CommunityPostLikes> CommunityPostLikesDbSet { get; set; }
    }
}
