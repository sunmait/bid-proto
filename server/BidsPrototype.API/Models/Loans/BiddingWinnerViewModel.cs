using System;

namespace BidsPrototype.API.Models.Loans
{
    public class BiddingWinnerViewModel
    {
        public int UserId { get; set; }

        public string Username { get; set; }

        public double Amount { get; set; }

        public DateTime BidDate { get; set; }

        public DateTime BiddingDate { get; set; }
    }
}
