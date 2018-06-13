using BidsPrototype.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BidsPrototype.Infrastructure.Data.Mapping
{
    class LoanMappingConfigurator : IEntityTypeConfiguration<Loan>
    {
        public void Configure(EntityTypeBuilder<Loan> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Label).IsRequired();
            builder.Property(x => x.InitialFee).IsRequired();
            builder.Property(x => x.AvailableBidPercentage).IsRequired();

            builder.Property<int>("_bidStartDay")
                .HasColumnName("BidStatrDay")
                .IsRequired();

            builder.Property<int>("_bidStartTimeSeconds")
                .HasColumnName("BidStartTimeSeconds")
                .IsRequired();

            builder.HasMany(x => x.Bids)
                .WithOne(x => x.Loan)
                .IsRequired();

            builder.HasMany(x => x.LoanUsers)
                .WithOne(x => x.Loan)
                .IsRequired();
        }
    }
}
