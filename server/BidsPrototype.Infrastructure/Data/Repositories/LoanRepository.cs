using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Repositories;

namespace BidsPrototype.Infrastructure.Data.Repositories
{
    public class LoanRepository : EfRepository<Loan>, ILoanRepository
    {
        public LoanRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
