﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Repositories;
using BidsPrototype.Domain.Specifications.Impl;

namespace BidsPrototype.Domain.Services.Impl
{
    public class LoanService : ILoanService
    {
        private readonly ILoanRepository _loanRepo;

        public LoanService(ILoanRepository loanRepo)
        {
            _loanRepo = loanRepo;
        }

        public async Task<IEnumerable<Loan>> GetLoansOfUserAsync(int userId)
        {
            var spec = new Specification<Loan>(x => x.LoanUsers.FirstOrDefault(y => y.UserId == userId) != null);
            spec.Includes.Add(x => x.LoanUsers);

            IEnumerable<Loan> loans = await _loanRepo.FindAllAsync(spec);
            return loans;
        }
    }
}
