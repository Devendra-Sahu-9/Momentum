using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Momentum.Application.Common.Interfaces;
using Momentum.Infrastructure.Authentication;

namespace Momentum.Infrastructure;

public static class InfrastructureServiceRegistration
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IJwtService, JwtService>();
        return services;
    }
}