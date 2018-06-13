using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidsPrototype.API.Models.Loans;
using BidsPrototype.Domain.Exceptions;
using BidsPrototype.Domain.Model;
using BidsPrototype.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace BidsPrototype.API.Controllers
{
    [Route("api/v1/[controller]")]
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
            int? currentUserId = ExtractUserIdFromHeader();
            if (currentUserId == null)
            {
                return Unauthorized();
            }

            IEnumerable<Loan> loans = await _loanService.GetLoansOfUserAsync(currentUserId.Value);
            IEnumerable<LoanViewModel> viewModels = loans.Select(loan => new LoanViewModel()
            {
                Id = loan.Id,
                Label = loan.Label,
                MaxBidAmount = loan.MaxBidAmount
            });

            return Ok(viewModels);
        }

        [HttpPost("{id}/bid")]
        public async Task<ActionResult> MakeBid(int id, MakeBidInputModel inputModel)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int? currentUserId = ExtractUserIdFromHeader();
            if (currentUserId == null)
            {
                return Unauthorized();
            }

            try
            {
                await _loanService.MakeBid(currentUserId.Value, id, inputModel.Amount);
                return Ok();
            }
            catch (BusinessLogicException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private int? ExtractUserIdFromHeader()
        {
            int userId;
            bool isSuccessful = int.TryParse(Request.Headers["userid"], out userId);

            return isSuccessful ? userId : (int?)null;
        }
    }
}