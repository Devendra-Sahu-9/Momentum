using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Momentum.Application;

public static class ApplicationServiceRegistration
{
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

        return services;
    }
}