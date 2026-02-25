import { useState, type JSX } from "react";
import { Card } from "../../../shared/components/ui/Card";
import { Input } from "../../../shared/components/ui/Input";
import { Button } from "../../../shared/components/ui/Button";

const LoginPage = (): JSX.Element => {
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendOtp = async (): Promise<void> => {
    if (!phone.trim()) return;

    try {
      setIsLoading(true);

      // 🔥 Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setOtpSent(true);
    } catch (error) {
      console.error("Send OTP failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!otp.trim()) return;

    try {
      setIsLoading(true);

      // 🔥 Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Login Success");
    } catch (error) {
      console.error("OTP verification failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card>
        <form
          onSubmit={otpSent ? handleVerifyOtp : undefined}
          className="space-y-4 w-80"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <Input
            label="Phone"
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />

          {otpSent && (
            <Input
              label="OTP"
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOtp(e.target.value)
              }
            />
          )}

          {!otpSent ? (
            <Button
              type="button"
              variant="primary"
              isLoading={isLoading}
              onClick={handleSendOtp}
              className="w-full"
            >
              Send OTP
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
              className="w-full"
            >
              Submit
            </Button>
          )}
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
