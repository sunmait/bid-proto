using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BidsPrototype.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoansController : ControllerBase
    {
        private readonly ILoanService _loanService;

        public LoansController(ILoanService loanService)
        {
            _loanService = loanService;
        }

        public async Task<ActionResult<IEnumerable<string>>> Get()
        {
            IEnumerable<Loan> loans = await _loanService.GetLoansOfUserAsync(1);
            return Ok(loans);
        }
    }
}