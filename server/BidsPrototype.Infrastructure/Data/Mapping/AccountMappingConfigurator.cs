using BidsPrototype.Domain.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BidsPrototype.Infrastructure.Data.Mapping
{
    class AccountMappingConfigurator : IEntityTypeConfiguration<Account>
    {
        public void Configure(EntityTypeBuilder<Account> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.RawPassword).IsRequired();
            builder.Property(x => x.Username).IsRequired();

            builder.HasOne(x => x.User)
                .WithOne(x => x.Account)
                .HasForeignKey<User>("AccountId");
        }
    }
}
