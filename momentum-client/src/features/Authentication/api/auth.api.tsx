import { api } from "../../../services/api";

export const sendOtpApi = async (phoneNumber: string) => {
  const response = await api.post("/auth/send-otp", { phoneNumber });
  return response.data;
};

export const verifyOtpApi = async (phoneNumber: string, otp: string) => {
  const response = await api.get("/auth/verify-otp", {
    params: {
      phoneNumber,
      otp,
    },
  });
  return response.data;
};
