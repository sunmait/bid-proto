using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Repositories;
using BidsPrototype.Domain.Specifications.Impl;

namespace BidsPrototype.Domain.Services.Impl
{
    public class LoanService : ILoanService
    {
        private readonly ILoanRepository _loanRepo;

        public LoanService(ILoanRepository loanRepo)
        {
            _loanRepo = loanRepo;
        }

        public async Task<IEnumerable<Loan>> GetLoansOfUserAsync(int userId)
        {
            var spec = new Specification<Loan>(x => x.LoanUsers.FirstOrDefault(y => y.UserId == userId) != null);
            spec.Includes.Add(x => x.LoanUsers);

            IEnumerable<Loan> loans = await _loanRepo.FindAllAsync(spec);
            return loans;
        }

        public async Task<IEnumerable<(DateTime biddingDate, Bid winningBid)>> GetBiddingWinners(int loanId)
        {
            var spec = new Specification<Loan>(x => x.Id == loanId);
            spec.IncludeStrings.Add("Bids.User.Account");

            Loan loan = await _loanRepo.FindFirstAsync(spec);

            IEnumerable<(DateTime biddingDate, Bid winningBid)> winners = loan.Bids
                .GroupBy(bid => bid.CreatedDate.Date)
                .Select(group => (group.Key, MaxByBidAmount(group)));

            Bid MaxByBidAmount(IGrouping<DateTime, Bid> group)
            {
                return group.Aggregate((item1, item2) => item1.Amount > item2.Amount ? item1 : item2);
            }

            return winners;
        }

        public async Task MakeBid(int userId, int loanId, double amount)
        {
            var spec = new Specification<Loan>(x => x.Id == loanId);
            spec.Includes.Add(x => x.Bids);
            spec.IncludeStrings.Add("LoanUsers.User");

            Loan loan = await _loanRepo.FindFirstAsync(spec);
            loan.MakeBid(userId, amount);

            await _loanRepo.UpdateAsync(loan);
        }
    }
}
