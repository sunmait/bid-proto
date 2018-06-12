namespace BidsPrototype.Domain.Model
{
    public class Bid
    {
        // Required for EF
        protected Bid()
        {
        }

        public Bid(double amount, User user)
        {
            Amount = amount;
            User = user;
        }

        public int Id { get; private set; }

        public double Amount { get; private set; }

        public User User { get; private set; }

        public Loan Loan { get; private set; }
    }
}
