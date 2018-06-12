using BidsPrototype.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BidsPrototype.Infrastructure.Data.Mapping
{
    class UserMappingConfigurator : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Account)
                .WithOne(x => x.User)
                .HasForeignKey<Account>("UserId")
                .IsRequired();

            builder
                .HasMany(x => x.Bids)
                .WithOne(x => x.User);

            builder.HasMany(x => x.UserLoans)
                .WithOne(x => x.User)
                .IsRequired();
        }
    }
}
