using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace BidsPrototype.Domain.Specifications.Impl
{
    public class Specification<T> : ISpecification<T>
    {
        public Expression<Func<T, bool>> Criteria { get; private set; }

        public List<Expression<Func<T, object>>> Includes { get; } = new List<Expression<Func<T, object>>>();
        public List<string> IncludeStrings { get; } = new List<string>();

        public bool HasIncludes => Includes.Any() || IncludeStrings.Any();

        public Specification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public Specification(Expression<Func<T, bool>> criteria, List<Expression<Func<T, object>>> includes)
            : this(criteria)
        {
            Includes = includes;
        }

        public Specification(Expression<Func<T, bool>> criteria, List<string> includeStrings)
            : this(criteria)
        {
            IncludeStrings = includeStrings;
        }

        public void AddAndCriteria(Expression<Func<T, bool>> criteria)
        {
            AppendCriteria(criteria, Expression.And);
        }

        public void AddOrCriteria(Expression<Func<T, bool>> criteria)
        {
            AppendCriteria(criteria, Expression.Or);
        }

        // TODO: Test this
        private void AppendCriteria(Expression<Func<T, bool>> newCriteria, Func<Expression, Expression, BinaryExpression> operation)
        {
            if (Criteria == null)
            {
                Criteria = newCriteria;
            }
            else
            {
                BinaryExpression binExpression = operation(Criteria, newCriteria);
                Criteria = Expression.Lambda<Func<T, bool>>(binExpression);
            }
        }
    }
}
