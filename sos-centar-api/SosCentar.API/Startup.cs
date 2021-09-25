using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using SosCentar.DataAccess;
using System;

namespace SosCentar.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SosCentarAPI", Version = "v1" });
            });
            services.AddDbContext<ReportContext>(options =>
            {
                string connectionString = Configuration.GetConnectionString("MyWebApiConection");
                string postgresDb = Environment.GetEnvironmentVariable("POSTGRES_DB");
                string postgresUser = Environment.GetEnvironmentVariable("POSTGRES_USER");
                string postgresPassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");
                string formattedConnectionString = string.Format(connectionString, postgresDb, postgresUser, postgresPassword);
                options.UseNpgsql(formattedConnectionString);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SosCentarAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
