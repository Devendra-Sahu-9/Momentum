import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { sendOtp, verifyOtp } from "../authSlice";
import { Button } from "../../../shared/components/ui/Button";
import { Input } from "../../../shared/components/ui/Input";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { step, phoneNumber, loading, error, accessToken } = useAppSelector(
    (state) => state.auth,
  );

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (accessToken) {
      navigate("/tasks");
    }
  }, [accessToken, navigate]);

  const handleSendOtp = () => {
    dispatch(sendOtp(phone));
  };

  const handleVerifyOtp = () => {
    dispatch(verifyOtp({ phoneNumber, otp }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">Login</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {step === "phone" && (
          <>
            <Input
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              onClick={handleSendOtp}
              isLoading={loading}
              className="w-full"
            >
              Send OTP
            </Button>
          </>
        )}

        {step === "otp" && (
          <>
            <Input
              label="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button
              onClick={handleVerifyOtp}
              isLoading={loading}
              className="w-full"
            >
              Verify OTP
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default LoginPage;
