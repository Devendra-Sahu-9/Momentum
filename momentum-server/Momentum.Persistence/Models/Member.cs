using System;
using System.Collections.Generic;

namespace Momentum.Persistence.Models;

public partial class Member
{
    public Guid MemberId { get; set; }

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string PhoneNumber { get; set; } = null!;

    public DateOnly? DateOfBirth { get; set; }

    public string? Gender { get; set; }

    public string? ProfilePictureUrl { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<Address> Addresses { get; set; } = new List<Address>();

    public virtual ICollection<MemberOtp> MemberOtps { get; set; } = new List<MemberOtp>();
}
