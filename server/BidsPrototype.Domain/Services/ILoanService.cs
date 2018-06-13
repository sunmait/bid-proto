using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BidsPrototype.Domain.Model;

namespace BidsPrototype.Domain.Services
{
    public interface ILoanService
    {
        Task<IEnumerable<Loan>> GetLoansOfUserAsync(int userId);

        Task<IEnumerable<(DateTime biddingDate, Bid winningBid)>> GetBiddingWinners(int loanId);

        Task MakeBid(int userId, int loanId, double amount);
    }
}
