import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipesSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    auth: authReducer,
  },
});
