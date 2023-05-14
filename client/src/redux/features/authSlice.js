import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AUTH_URL = "http://localhost:5000/auth";
const initialState = {
  data: [],
  status: "idle", // idle, loading, success, failed
  error: null,
};

export const addUser = createAsyncThunk("auth/addUser", async (formData) => {
  const response = await axios.post(AUTH_URL + "/register", formData);
  return response.data;
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData) => {
    const response = await axios.post(AUTH_URL + "/login", formData);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        console.log("tu1", action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        console.log(action.payload);
      });
  },
});

export const selectUser = (state) => state.auth.data;

// export const {  } = tatsSlice.actions;

export default authSlice.reducer;
