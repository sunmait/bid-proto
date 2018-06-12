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

        private static IEnumerable<Account> GetPreconfiguredAccounts()
        {
            var acc1 = new Account("user1", "1234");
            acc1.SetUser(new User());

            var acc2 = new Account("user2", "1234");
            acc1.SetUser(new User());

            var acc3 = new Account("user2", "1234");
            acc1.SetUser(new User());

            return new List<Account>() { acc1, acc2, acc3 };
        }

        private static IEnumerable<LoanUser> GetPreconfiguredLoanUsers()
        {
            return new List<LoanUser>()
            {
                new LoanUser() { UserId = 1, LoanId = 1 },
                new LoanUser() { UserId = 1, LoanId = 2 },
                new LoanUser() { UserId = 1, LoanId = 3 },
                new LoanUser() { UserId = 1, LoanId = 4 },
                new LoanUser() { UserId = 2, LoanId = 2 },
                new LoanUser() { UserId = 2, LoanId = 3 },
                new LoanUser() { UserId = 2, LoanId = 4 },
                new LoanUser() { UserId = 1, LoanId = 2 }
            };
        }
    }
}
