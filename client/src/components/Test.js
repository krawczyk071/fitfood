import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectAllRecipes } from "../redux/features/recipesSlice";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";

const Test = () => {
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // console.log("t", recipes);
  return (
    <>
      <Recipe recipe={recipes[0]} />
      <AddRecipe edit={recipes[0]} />
    </>
  );
};

export default Test;
