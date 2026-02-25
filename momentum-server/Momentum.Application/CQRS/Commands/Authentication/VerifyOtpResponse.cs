using MediatR;

namespace Momentum.Application.Authentication
{
public record VerifyOtpResponse(string AccessToken);
}