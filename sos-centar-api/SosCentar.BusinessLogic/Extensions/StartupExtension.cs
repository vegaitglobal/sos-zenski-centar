using Microsoft.Extensions.DependencyInjection;
using SosCentar.BusinessLogic.Services;
using SosCentar.Contracts.Interfaces.Services;

namespace SosCentar.BusinessLogic.Extensions
{
    public static class StartupExtension
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<ISecurityService, SecurityService>();

            return services;
        }
    }
}
