using System.Collections.Generic;
using System.Linq;
using BidsPrototype.Domain.Exceptions;

namespace BidsPrototype.Domain.Model
{
    public class Loan
    {
        public Loan(string label, double initialFee, double availableBidPercentage)
        {
            Label = label;
            InitialFee = initialFee;
            AvailableBidPercentage = availableBidPercentage;
        }

        public int Id { get; private set; }

        public string Label { get; private set; }

        public double InitialFee { get; private set; }

        public double AvailableBidPercentage { get; private set; }

        public ICollection<Bid> Bids { get; private set; } = new List<Bid>();

        public ICollection<LoanUser> LoanUsers { get; private set; } = new List<LoanUser>();

        public double MaxBidAmount => (LoanUsers.Count * InitialFee) * (AvailableBidPercentage / 100.0);

        public void MakeBid(int userId, double amount)
        {
            User user = LoanUsers
                .FirstOrDefault(x => x.UserId == userId)
                ?.User;
            Bid bid = new Bid(amount, user);

            ValidateNewBid(bid);

            Bids.Add(bid);
        }

        private void ValidateNewBid(Bid bid)
        {
            if (bid.Amount < 1 || bid.Amount > MaxBidAmount)
            {
                throw new BusinessLogicException("Invalid bid amount.");
            }

            if (bid.User == null)
            {
                throw new BusinessLogicException("Current user doesn't participate in specified loan.");
            }
        }
    }
}
