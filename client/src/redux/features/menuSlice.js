import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuService from "./menuService";

const initialState = {
  data: [],
  status: "idle", // idle, loading, success, failed
  error: null,
};

export const addToMenu = createAsyncThunk(
  "menu/add",
  async (recipeId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await menuService.add(recipeId, token);
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

export const fetchAllMenu = createAsyncThunk(
  "menu/fetch",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await menuService.fetchAll(token);
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
export const delFromMenu = createAsyncThunk(
  "menu/del",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await menuService.del(id, token);
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

export const menuSlice = createSlice({
  name: "menu",
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
      .addCase(addToMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToMenu.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = "success";
      })
      .addCase(addToMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchAllMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMenu.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })

      .addCase(delFromMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(delFromMenu.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item._id !== action.payload.id
        );
        state.status = "success";
      })
      .addCase(delFromMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const selectUser = (state) => state.menu.data;

export const { reset } = menuSlice.actions;

export default menuSlice.reducer;
