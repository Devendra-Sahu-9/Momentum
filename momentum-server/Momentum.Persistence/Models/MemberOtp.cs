using System;
using System.Collections.Generic;

namespace Momentum.Persistence.Models;

public partial class MemberOtp
{
    public Guid MemberOtpId { get; set; }

    public Guid MemberId { get; set; }

    public string OtpCode { get; set; } = null!;

    public DateTime ExpiresAt { get; set; }

    public bool IsUsed { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Member Member { get; set; } = null!;
}
