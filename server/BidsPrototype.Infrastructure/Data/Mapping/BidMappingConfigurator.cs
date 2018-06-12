using BidsPrototype.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BidsPrototype.Infrastructure.Data.Mapping
{
    class BidMappingConfigurator : IEntityTypeConfiguration<Bid>
    {
        public void Configure(EntityTypeBuilder<Bid> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Amount).IsRequired();

            builder.HasOne(x => x.User)
                .WithMany(x => x.Bids)
                .IsRequired();

            builder.HasOne(x => x.Loan)
                .WithMany(x => x.Bids)
                .IsRequired();
        }
    }
}
