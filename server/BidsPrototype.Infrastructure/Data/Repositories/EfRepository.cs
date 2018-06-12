using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.Domain.Repositories;
using BidsPrototype.Domain.Specifications;
using Microsoft.EntityFrameworkCore;

namespace BidsPrototype.Infrastructure.Data.Repositories
{
    public class EfRepository<T> : IRepository<T> where T : class
    {
        public EfRepository(DataContext dataContext)
        {
            DataContext = dataContext;
            DbSet = dataContext.Set<T>();
        }

        protected DataContext DataContext { get; private set; }
        protected DbSet<T> DbSet { get; private set; }

        public async Task<IEnumerable<T>> FindAllAsync()
        {
            return await DbSet.ToListAsync();
        }

        public async Task<IEnumerable<T>> FindAllAsync(ISpecification<T> spec)
        {
            IQueryable<T> query = BuildQueryBySpec(spec);
            return await query.ToListAsync();
        }

        public async Task<T> FindFirstAsync(ISpecification<T> spec)
        {
            IQueryable<T> query = BuildQueryBySpec(spec);
            return await query.FirstOrDefaultAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            DataContext.Entry(entity).State = EntityState.Modified;
            await DataContext.SaveChangesAsync();
        }

        protected IQueryable<T> BuildQueryBySpec(ISpecification<T> spec)
        {
            IQueryable<T> query = spec
                .Includes
                .Aggregate(DbSet.AsQueryable(), (current, include) => current.Include(include));

            query = spec
                .IncludeStrings
                .Aggregate(query, (current, include) => current.Include(include));

            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            return query;
        }
    }
}
