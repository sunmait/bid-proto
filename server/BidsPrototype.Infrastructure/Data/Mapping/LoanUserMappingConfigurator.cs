using BidsPrototype.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BidsPrototype.Infrastructure.Data.Mapping
{
    class LoanUserMappingConfigurator : IEntityTypeConfiguration<LoanUser>
    {
        public void Configure(EntityTypeBuilder<LoanUser> builder)
        {
            builder.HasKey(x => new { x.UserId, x.LoanId });

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserLoans)
                .HasForeignKey(x => x.UserId);

            builder.HasOne(x => x.Loan)
                .WithMany(x => x.LoanUsers)
                .HasForeignKey(x => x.LoanId);
        }
    }
}
