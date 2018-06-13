using System.Collections.Generic;
using BidsPrototype.Domain.Model;

namespace BidsPrototype.Infrastructure.Data
{
    public static class DataContextSeed
    {
        public static void Seed(DataContext dataContext)
        {
            dataContext.Database.EnsureDeleted();
            dataContext.Database.EnsureCreated();

            // dataContext.Accounts.AddRange(GetPreconfiguredAccounts());
            dataContext.Loans.AddRange(GetPreconfiguredLoans());

            dataContext.SaveChanges();
        }

        private static IEnumerable<Loan> GetPreconfiguredLoans()
        {
            return new List<Loan>()
            {
                new Loan("Loan 1", 200, 90),
                new Loan("Loan 2", 400, 90),
                new Loan("Loan 3", 300, 90),
                new Loan("Loan 4", 400, 90)
            };
        }
    }
}
