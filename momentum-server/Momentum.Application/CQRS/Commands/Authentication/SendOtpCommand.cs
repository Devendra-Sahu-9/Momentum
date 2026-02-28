using MediatR;

namespace Momentum.Application.Authentication
{
    public class SendOtpCommand : IRequest<bool>
    {
        public string PhoneNumber { get; set; }
    }
}