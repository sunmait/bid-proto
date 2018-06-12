using BidsPrototype.Domain.Model;
using BidsPrototype.Infrastructure.Data.Mapping;
using Microsoft.EntityFrameworkCore;

namespace BidsPrototype.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) 
            : base(options)
        {
            // TODO: Replace this to migrations
            // DataContextSeed.Seed(this);
            Database.EnsureCreated();
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Bid> Bids { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AccountMappingConfigurator());
            modelBuilder.ApplyConfiguration(new BidMappingConfigurator());
            modelBuilder.ApplyConfiguration(new LoanMappingConfigurator());
            modelBuilder.ApplyConfiguration(new LoanUserMappingConfigurator());
            modelBuilder.ApplyConfiguration(new UserMappingConfigurator());
        }
    }
}
