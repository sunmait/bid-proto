using System.ComponentModel.DataAnnotations;

namespace BidsPrototype.API.Models.Loans
{
    public class MakeBidInputModel
    {
        [Required]
        [Range(0, double.MaxValue)]
        public double Amount { get; set; }
    }
}
