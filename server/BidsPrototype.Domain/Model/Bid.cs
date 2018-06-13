using System;

namespace BidsPrototype.Domain.Model
{
    public class Bid
    {
        // Required for EF
        protected Bid()
        {
        }

        public Bid(double amount, User user, DateTime createdDate)
        {
            Amount = amount;
            User = user;
            CreatedDate = createdDate;
        }

        public int Id { get; private set; }

        public double Amount { get; private set; }

        public DateTime CreatedDate { get; private set; }

        public User User { get; private set; }

        public Loan Loan { get; private set; }
    }
}
