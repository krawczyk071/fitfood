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
      return await menuService.add(recipeId);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToMenu.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(addToMenu.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error;
      });
  },
});

export const selectUser = (state) => state.menu.data;

// export const { reset } = menuSlice.actions;

export default menuSlice.reducer;
