namespace BidsPrototype.Domain.Model
{
    public class Bid
    {
        public int Id { get; private set; }

        public double Amount { get; private set; }

        public User User { get; private set; }

        public Loan Loan { get; private set; }
    }
}
