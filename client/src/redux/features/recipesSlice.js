import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import recipesService from "./recipesService";

const RECIPES_URL = "http://localhost:5000/recipes";
const initialState = {
  data: [],
  status: "idle", // idle, loading, success, failed
  error: null,
};

// export const fetchRecipes = createAsyncThunk(
//   "recipes/fetchRecipes",
//   async () => {
//     const response = await axios.get(RECIPES_URL);
//     return response.data;
//   }
// );
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (thunkAPI) => {
    try {
      return await recipesService.fetch();
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
// export const getRecipe = createAsyncThunk(
//   "recipes/getRecipe",
//   async () => {
//     const response = await axios.get(RECIPES_URL);
//     return response.data;
//   }
// );

// export const addRecipe = createAsyncThunk(
//   "recipes/addRecipe",
//   async (formData) => {
//     const response = await axios.post(RECIPES_URL, formData);
//     return response.data;
//   }
// );
export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await recipesService.add(formData, token);
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

export const editRecipe = createAsyncThunk(
  "recipes/editOne",
  async ({ formData, id }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await recipesService.editOne(formData, id, token);
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

export const delRecipe = createAsyncThunk(
  "recipes/delOne",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.data.token;
      return await recipesService.delOne(id, token);
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
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })

      .addCase(editRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editRecipe.fulfilled, (state, action) => {
        state.data = [
          ...state.data.filter((d) => d._id !== action.payload._id),
          action.payload,
        ];
        state.status = "success";
      })
      .addCase(editRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(delRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(delRecipe.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = state.data.filter(
          (recipe) => recipe._id !== action.payload.id
        );
        state.status = "success";
      })
      .addCase(delRecipe.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error;
      });
  },
});

export const selectAllRecipes = (state) => state.recipes.data;
export const getRecipesStatus = (state) => state.recipes.status;

// export const {  } = tatsSlice.actions;

export default recipesSlice.reducer;
