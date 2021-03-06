﻿using System;

namespace BidsPrototype.API.Models.Loans
{
    public class LoanViewModel
    {
        public int Id { get; set; }

        public string Label { get; set; }

        public double MaxBidAmount { get; set; }

        public DateTime BidStartTime { get; set; }

        public int BidTimeDurationSeconds { get; set; }
    }
}
