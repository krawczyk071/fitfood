import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RECIPES_URL = "http://localhost:5000/recipes";
const initialState = {
  data: [],
  status: "idle", // idle, loading, success, failed
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await axios.get(RECIPES_URL);
    return response.data;
  }
);

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async (formData) => {
    const response = await axios.post(RECIPES_URL, formData);
    return response.data;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export const selectAllRecipes = (state) => state.recipes.data;
export const getRecipesStatus = (state) => state.recipes.status;

// export const {  } = tatsSlice.actions;

export default recipesSlice.reducer;
