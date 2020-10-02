using WellnessApp.DAL.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace WellnessApp.DAL.Configurations
{
    public class WellnessAppDbContext : IdentityDbContext<ApplicationUser>
    {
        public WellnessAppDbContext(DbContextOptions<WellnessAppDbContext> options) : base(options) { }
    }

  

    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<WellnessAppDbContext>
    {
        public WellnessAppDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(@Directory.GetCurrentDirectory() + "/appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<WellnessAppDbContext>();
            var connectionString = "Server=tcp:head-help-server.database.windows.net,1433;Initial Catalog=HeadHelpDb;Persist Security Info=False;User ID=McCaul95;Password=Jaeger2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            builder.UseSqlServer(connectionString);
            return new WellnessAppDbContext(builder.Options);
        }
    }
}