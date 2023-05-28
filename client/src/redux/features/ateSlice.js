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
      const response = await ateService.add(ateData, token);
      await thunkAPI.dispatch(fetchAllAte());
      return response;
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

export const fetchAllAte = createAsyncThunk(
  "ate/fetch",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await ateService.fetchAll(token);
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

export const delFromAte = createAsyncThunk("ate/del", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.data.token;
    return await ateService.del(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const ateSlice = createSlice({
  name: "ate",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToAte.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToAte.fulfilled, (state, action) => {
        // state.data.push(action.payload);
        state.status = "success";
      })
      .addCase(addToAte.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchAllAte.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllAte.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllAte.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(delFromAte.pending, (state) => {
        state.status = "loading";
      })
      .addCase(delFromAte.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = state.data.filter((ate) => ate._id !== action.payload.id);
        state.status = "success";
      })
      .addCase(delFromAte.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

// export const selectUser = (state) => state.ate.data;

export const { reset } = ateSlice.actions;

export default ateSlice.reducer;
