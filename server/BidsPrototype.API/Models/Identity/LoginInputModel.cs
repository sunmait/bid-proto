using System.ComponentModel.DataAnnotations;

namespace BidsPrototype.API.Models.Identity
{
    public class LoginInputModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
