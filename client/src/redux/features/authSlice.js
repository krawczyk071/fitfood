import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { reset as resetMenu } from "./menuSlice";
import { reset as resetAte } from "./ateSlice";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: user ? user : null,
  status: "idle", // idle, loading, success, failed
  error: null,
};

export const addUser = createAsyncThunk(
  "auth/addUser",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    // console.log("lout e");
    await authService.logout();
    thunkAPI.dispatch(resetMenu());
    thunkAPI.dispatch(resetAte());
    // console.log("lout0");
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    },
    lout: (state) => {
      localStorage.removeItem("user");
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        // console.log("tu1", action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })

      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.data = null;
        state.status = "idle";
      });
  },
});

export const selectUser = (state) => state.auth.data;

export const { reset, lout } = authSlice.actions;

export default authSlice.reducer;
