using MediatR;

namespace Momentum.Application.Authentication
{
    class SendOtpCommand : IRequest<bool>
    {
        public string PhoneNumber { get; set; }
    }
}