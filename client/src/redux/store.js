import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipesSlice";
import authReducer from "./features/authSlice";
import menuReducer from "./features/menuSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    auth: authReducer,
    menu: menuReducer,
  },
});
