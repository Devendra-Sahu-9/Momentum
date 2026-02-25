using MediatR;
using Momentum.Application.Common.Interfaces;

namespace Momentum.Application.Authentication
{
    public class VerifyOtpHandler : IRequestHandler<VerifyOtpCommand, VerifyOtpResponse>
    {
        // private readonly IOtpService _otpService;
        private readonly IJwtService _jwtService;

        public VerifyOtpHandler(
            IJwtService jwtService)
        {
            _jwtService = jwtService;
        }

        public async Task<VerifyOtpResponse> Handle(VerifyOtpCommand request,CancellationToken cancellationToken)
        {
            // 1️⃣ Validate OTP
            // var isValid = await _otpService.ValidateOtp(
            //     request.PhoneNumber,
            //     request.Otp);

            // if (!isValid)
            //     throw new UnauthorizedAccessException("Invalid OTP");

            // 2️⃣ Normally fetch user from DB here
            // For now hardcoded userId
            var userId = "1";

            // 3️⃣ Generate JWT
            var token = _jwtService.GenerateToken(
                userId,
                request.PhoneNumber,
                "User"
            );

            // 4️⃣ Return token
            return new VerifyOtpResponse(token);
        }
    }
}