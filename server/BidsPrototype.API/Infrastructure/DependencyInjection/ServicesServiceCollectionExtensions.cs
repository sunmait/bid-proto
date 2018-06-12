using BidsPrototype.Domain.Services;
using BidsPrototype.Domain.Services.Impl;
using Microsoft.Extensions.DependencyInjection;

namespace BidsPrototype.API.Infrastructure.DependencyInjection
{
    public static class ServicesServiceCollectionExtensions
    {
        public static IServiceCollection AddDomainServices(this IServiceCollection services)
        {
            services.AddTransient<ILoanService, LoanService>();

            return services;
        }
    }
}
