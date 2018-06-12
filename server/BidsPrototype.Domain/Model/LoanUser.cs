namespace BidsPrototype.Domain.Model
{
    public class LoanUser
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int LoanId { get; set; }
        public Loan Loan { get; set; }
    }
}
