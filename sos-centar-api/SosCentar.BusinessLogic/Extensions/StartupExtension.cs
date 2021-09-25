using Microsoft.Extensions.DependencyInjection;
using SosCentar.BusinessLogic.Services;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.DataAccess.Repositories;

namespace SosCentar.BusinessLogic.Extensions
{
    public static class StartupExtension
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ISecurityService, SecurityService>();
            services.AddScoped<IUserService, UserService>();

            return services;
        }
    }
}
