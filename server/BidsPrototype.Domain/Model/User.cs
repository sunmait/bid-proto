using System.Collections.Generic;

namespace BidsPrototype.Domain.Model
{
    public class User
    {
        public int Id { get; private set; }

        public Account Account { get; private set; }

        public ICollection<Bid> Bids { get; private set; } = new List<Bid>();

        public ICollection<LoanUser> UserLoans { get; private set; } = new List<LoanUser>();
    }
}
