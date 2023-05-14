import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectAllRecipes } from "../redux/features/recipesSlice";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import { useCookies } from "react-cookie";

const Test = () => {
  function logout() {
    setCookies("access_token", "");
    localStorage.removeItem("userId");
    // navigate
    alert("loggedOUT");
  }
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies(["access_token"]);
  console.log("c", cookies);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // console.log("t", recipes);
  return (
    <>
      <Recipe recipe={recipes[0]} />
      <AddRecipe edit={recipes[0]} />
      <h2>{cookies.length > 0 ? "Y" : "N"}</h2>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Test;
