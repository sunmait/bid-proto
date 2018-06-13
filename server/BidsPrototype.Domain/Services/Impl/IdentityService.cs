using System.Threading.Tasks;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Repositories;
using BidsPrototype.Domain.Specifications.Impl;

namespace BidsPrototype.Domain.Services.Impl
{
    public class IdentityService : IIdentityService
    {
        private readonly IAccountRepository _accountRepo;

        public IdentityService(IAccountRepository accountRepo)
        {
            _accountRepo = accountRepo;
        }

        public async Task<Account> LoginUserAsync(string username, string password)
        {
            var spec = new Specification<Account>(x => x.Username == username);
            spec.Includes.Add(x => x.User);

            Account account = await _accountRepo.FindFirstAsync(spec);

            bool isPasswordValid = false;
            if (account != null)
            {
                isPasswordValid = account.ValidateCredentials(username, password);
            }

            return isPasswordValid ? account : null;
        }
    }
}
