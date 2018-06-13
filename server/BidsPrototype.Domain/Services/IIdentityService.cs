using System.Threading.Tasks;
using BidsPrototype.Domain.Model;

namespace BidsPrototype.Domain.Services
{
    public interface IIdentityService
    {
        Task<Account> LoginUserAsync(string username, string password);
    }
}
