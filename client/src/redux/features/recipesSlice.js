import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createRecipe, fetchRecipes } from "../../utils/api";

// First, create the thunk
export const fetchAllRecipes = createAsyncThunk("fetchAll", async () => {
  const response = await fetchRecipes();
  return response;
});

export const addRecipe = createAsyncThunk("addRecipeN", async (data) => {
  // console.log("dt", data);

  await createRecipe(data);

  return true;
});

const initialState = { data: [], loading: true, error: null };

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllRecipes.pending]: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [fetchAllRecipes.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.data = action.payload.data;
        // console.log("att", action.payload); // null
        state.loading = false;
      }
    },
    [fetchAllRecipes.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
    [addRecipe.pending]: (state, action) => {
      console.log("api pending");
    },
    [addRecipe.fulfilled]: (state, action) => {
      console.log("api add");
    },
    [addRecipe.rejected]: (state, action) => {
      console.log(action.error);
    },
  },
});

// export const {  } = tatsSlice.actions;

export default recipesSlice.reducer;
