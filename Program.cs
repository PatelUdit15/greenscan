using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http;

namespace greenscan
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            // Register HttpClient to communicate with the Backend API (Server Project)
            // This is the CRITICAL line for API calls from the client.
            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            // **NO SERVER SERVICES (EcoScoreCalculator, DbContext, etc.) SHOULD BE REGISTERED HERE**

            await builder.Build().RunAsync();
        }
    }
}
