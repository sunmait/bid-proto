using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.API.Models.Loans;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Services;
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
            int currentUserId = 1;

            IEnumerable<Loan> loans = await _loanService.GetLoansOfUserAsync(currentUserId);
            IEnumerable<LoanViewModel> viewModels = loans.Select(loan => new LoanViewModel()
            {
                Id = loan.Id,
                Label = loan.Label,
                MaxBidAmount = (loan.LoanUsers.Count() * loan.InitialFee) * (loan.AvailableBidPercentage / 100.0)
            });

            return Ok(viewModels);
        }

        [HttpPost("{id}/bid")]
        public async Task<ActionResult> MakeBid(int id, MakeBidInputModel inputModel)
        {
            int currentUserId = 1;
            await _loanService.MakeBid(currentUserId, id, inputModel.Amount);

            return Ok();
        }
    }
}