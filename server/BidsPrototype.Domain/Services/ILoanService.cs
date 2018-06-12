using System.Collections.Generic;
using System.Threading.Tasks;
using BidsPrototype.Domain.Model;

namespace BidsPrototype.Domain.Services
{
    public interface ILoanService
    {
        Task<IEnumerable<Loan>> GetLoansOfUserAsync(int userId);

        Task MakeBid(int userId, int loanId, double amount);
    }
}
