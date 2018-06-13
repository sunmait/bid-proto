using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Repositories;

namespace BidsPrototype.Infrastructure.Data.Repositories
{
    public class AccountRepository : EfRepository<Account>, IAccountRepository
    {
        public AccountRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
