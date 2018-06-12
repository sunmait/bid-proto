using System.Collections.Generic;

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
    }
}
