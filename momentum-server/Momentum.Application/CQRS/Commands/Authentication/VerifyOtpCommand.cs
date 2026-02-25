using MediatR;

namespace Momentum.Application.Authentication
{
    public class VerifyOtpCommand : IRequest<VerifyOtpResponse>
    {
        public string PhoneNumber { get; set; }
        public string Otp { get; set; }
    }
}