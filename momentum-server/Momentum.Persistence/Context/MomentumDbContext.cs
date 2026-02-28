using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Momentum.Persistence.Models;

namespace Momentum.Persistence.Context;

public partial class MomentumDbContext : DbContext
{
    public MomentumDbContext()
    {
    }

    public MomentumDbContext(DbContextOptions<MomentumDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Address> Addresses { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<MemberOtp> MemberOtps { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost,1433;Database=sql-momentum-local;User ID=sa;Password=dockerStrongPwd123;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.AddressId).HasName("PK__Address__091C2AFB9ED97508");

            entity.ToTable("Address");

            entity.Property(e => e.AddressId).HasDefaultValueSql("(newid())");
            entity.Property(e => e.AddressLine1).HasMaxLength(255);
            entity.Property(e => e.AddressLine2).HasMaxLength(255);
            entity.Property(e => e.City).HasMaxLength(100);
            entity.Property(e => e.Country).HasMaxLength(100);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.PostalCode).HasMaxLength(20);
            entity.Property(e => e.State).HasMaxLength(100);
            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("(sysutcdatetime())");

            entity.HasOne(d => d.Member).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.MemberId)
                .HasConstraintName("FK__Address__MemberI__4D94879B");
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.HasKey(e => e.MemberId).HasName("PK__Member__0CF04B18C6A3A98F");

            entity.ToTable("Member");

            entity.HasIndex(e => e.PhoneNumber, "UQ__Member__85FB4E3862ABF06C").IsUnique();

            entity.HasIndex(e => e.Email, "UQ__Member__A9D10534C419BD7F").IsUnique();

            entity.Property(e => e.MemberId).HasDefaultValueSql("(newid())");
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(10);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.PhoneNumber).HasMaxLength(15);
            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("(sysutcdatetime())");
        });

        modelBuilder.Entity<MemberOtp>(entity =>
        {
            entity.HasKey(e => e.MemberOtpId).HasName("PK__MemberOt__9B469ACAE27AE282");

            entity.ToTable("MemberOtp");

            entity.Property(e => e.MemberOtpId).HasDefaultValueSql("(newid())");
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.OtpCode).HasMaxLength(10);

            entity.HasOne(d => d.Member).WithMany(p => p.MemberOtps)
                .HasForeignKey(d => d.MemberId)
                .HasConstraintName("FK__MemberOtp__Membe__47DBAE45");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
