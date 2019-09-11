using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace ADSUna.LAI.Portal.Web.Layout
{
    public class Program
    {
        private static readonly Dictionary<string, string> defaults =
            new Dictionary<string, string> { /*{ WebHostDefaults.EnvironmentKey, "Development" },*/ { WebHostDefaults.EnvironmentKey, "Production" } };
        private static IConfiguration config;
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
            //config = new ConfigurationBuilder()
            //    .AddInMemoryCollection(defaults)
            //    .AddEnvironmentVariables("ASPNETCORE_")
            //    .AddCommandLine(args)
            //    .Build();

            //CreateWebHostBuilder(args).UseConfiguration(config).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
