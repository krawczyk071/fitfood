import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectAllRecipes } from "../redux/features/recipesSlice";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";

const Test = () => {
  const recipes = useSelector(selectAllRecipes);

  // const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <>
      <Recipe recipe={recipes[0]} />
      <AddRecipe edit={recipes[0]} />
      {/* <h2>{cookies.length > 0 ? "Y" : "N"}</h2> */}
    </>
  );
};

export default Test;
