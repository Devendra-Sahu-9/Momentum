using MediatR;

namespace Momentum.Application.Authentication
{
    public class SendOtpHandler : IRequestHandler<SendOtpCommand, bool>
    {
        Task<bool> IRequestHandler<SendOtpCommand, bool>.Handle(SendOtpCommand request, CancellationToken cancellationToken)
        {
            return Task.FromResult(true);
        }
    }
}