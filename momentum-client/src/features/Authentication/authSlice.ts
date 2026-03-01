import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendOtpApi, verifyOtpApi } from "./api/auth.api";

interface AuthState {
  phoneNumber: string;
  step: "phone" | "otp";
  loading: boolean;
  error: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  phoneNumber: "",
  step: "phone",
  loading: false,
  error: null,
  accessToken: null,
};

// 🔥 Async Thunks

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      await sendOtpApi(phoneNumber);
      return phoneNumber;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send OTP",
      );
    }
  },
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    { phoneNumber, otp }: { phoneNumber: string; otp: string },
    { rejectWithValue },
  ) => {
    try {
      const data = await verifyOtpApi(phoneNumber, otp);
      return data.accessToken;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Invalid OTP");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder

      // SEND OTP
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.step = "otp";
        state.phoneNumber = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // VERIFY OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
        localStorage.setItem("accessToken", action.payload);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
