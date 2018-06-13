using BidsPrototype.Domain.Repositories;
using BidsPrototype.Infrastructure.Data;
using BidsPrototype.Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BidsPrototype.API.Infrastructure.DependencyInjection
{
    public static class RepositoriesServiceCollectionExtensions
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<DataContext>(options => options.UseSqlServer(connectionString))
                .AddTransient<ILoanRepository, LoanRepository>()
                .AddTransient<IAccountRepository, AccountRepository>();

            return services;
        }
    }
}
