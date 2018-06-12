using System.Collections.Generic;
using System.Threading.Tasks;
using BidsPrototype.Domain.Specifications;

namespace BidsPrototype.Domain.Repositories
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> FindAllAsync();

        Task<IEnumerable<T>> FindAllAsync(ISpecification<T> spec);

        Task<T> FindFirstAsync(ISpecification<T> spec);

        Task UpdateAsync(T entity);
    }
}
