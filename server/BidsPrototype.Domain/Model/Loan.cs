using System;
using System.Collections.Generic;
using System.Linq;
using BidsPrototype.Domain.Exceptions;

namespace BidsPrototype.Domain.Model
{
    public class Loan
    {
        private int _bidStartDay;
        private int _bidStartTimeSeconds;

        // Required for EF
        protected Loan()
        {
        }

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

        public int BidTimeDurationSeconds { get; } = 2 * 60 * 60; // 2 hours

        public double MaxBidAmount => (LoanUsers.Count * InitialFee) * (AvailableBidPercentage / 100.0);

        public void MakeBid(int userId, double amount)
        {
            User user = LoanUsers
                .FirstOrDefault(x => x.UserId == userId)
                ?.User;
            Bid bid = new Bid(amount, user, DateTime.Now);

            ValidateNewBid(bid);

            Bids.Add(bid);
        }

        // 'forDate' - date for which nearest bid time will calucalted
        public DateTime GetNearestBidStatTime(DateTime forDate)
        {
            DateTime nearestBidStatTime = 
                new DateTime(forDate.Year, forDate.Month, _bidStartDay) + TimeSpan.FromSeconds(_bidStartTimeSeconds);

            if (forDate >= nearestBidStatTime.AddSeconds(BidTimeDurationSeconds))
            {
                nearestBidStatTime = nearestBidStatTime.AddMonths(1);
            }

            return nearestBidStatTime;
        }

        private void ValidateNewBid(Bid bid)
        {
            string errorMessage = "";

            DateTime biddingStartTime = GetNearestBidStatTime(bid.CreatedDate);
            DateTime biddingEndTime = biddingStartTime.AddSeconds(BidTimeDurationSeconds);

            if (bid.CreatedDate < biddingStartTime || bid.CreatedDate > biddingEndTime)
            {
                errorMessage += "Invalid time for bidding.";
            }

            if (bid.Amount < 1 || bid.Amount > MaxBidAmount)
            {
                errorMessage += "\nInvalid bid amount.";
            }

            if (bid.User == null)
            {
                errorMessage += "\nCurrent user doesn't participate in specified loan.";
            }

            if (Bids.Any(x => x.User.Id == bid.User.Id && x.CreatedDate.Date == biddingStartTime.Date))
            {
                errorMessage += "\nCurrent user already has made a bid.";
            }

            if (!string.IsNullOrEmpty(errorMessage))
            {
                throw new BusinessLogicException(errorMessage);
            }
        }
    }
}
