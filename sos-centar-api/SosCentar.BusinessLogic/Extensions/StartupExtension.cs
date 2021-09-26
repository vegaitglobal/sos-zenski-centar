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
            services.AddScoped<IAnswerRepository, AnswerRepository>();
            services.AddScoped<IQuestionRepository, QuestionRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IEntryRepository, EntryRepository>();

            services.AddScoped<ISecurityService, SecurityService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAnswerService, AnswerService>();
            services.AddScoped<IEntryService, EntryService>();
            services.AddScoped<IQuestionService, QuestionService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IReportService, ReportsService>();

            return services;
        }
    }
}
