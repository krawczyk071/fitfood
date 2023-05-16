import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ateService from "./ateService";

const initialState = {
  data: [],
  status: "idle", // idle, loading, success, failed
  error: null,
};

export const addToAte = createAsyncThunk(
  "ate/add",
  async (ateData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await ateService.add(ateData, token);
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

export const ateSlice = createSlice({
  name: "ate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToAte.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToAte.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(addToAte.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error;
      });
  },
});

// export const selectUser = (state) => state.ate.data;

// export const { reset } = menuSlice.actions;

export default ateSlice.reducer;
