import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
  accessToken: localStorage.getItem("accessToken"),
};

// SEND OTP
export const sendOtp = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("auth/sendOtp", async (phoneNumber, { rejectWithValue }) => {
  try {
    await sendOtpApi(phoneNumber);
    return phoneNumber;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message ?? "Failed to send OTP",
      );
    }
    return rejectWithValue("Something went wrong");
  }
});

// VERIFY OTP
export const verifyOtp = createAsyncThunk<
  string,
  { phoneNumber: string; otp: string },
  { rejectValue: string }
>("auth/verifyOtp", async ({ phoneNumber, otp }, { rejectWithValue }) => {
  try {
    const data = await verifyOtpApi(phoneNumber, otp);
    return data.accessToken;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message ?? "Invalid OTP");
    }
    return rejectWithValue("Something went wrong");
  }
});

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
        state.error = action.payload ?? "Error";
      })
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
        state.error = action.payload ?? "Error";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
