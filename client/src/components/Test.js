import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectAllRecipes } from "../redux/features/recipesSlice";
import { logoutUser, lout } from "../redux/features/authSlice";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import { toast } from "react-toastify";

const Test = () => {
  function onLogout() {
    dispatch(logoutUser());
    // navigate
    toast.info("loggedOUT");
  }
  const recipes = useSelector(selectAllRecipes);
  const dispatch = useDispatch();

  // const [cookies, setCookies] = useCookies(["access_token"]);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <>
      <Recipe recipe={recipes[0]} />
      <AddRecipe edit={recipes[0]} />
      {/* <h2>{cookies.length > 0 ? "Y" : "N"}</h2> */}
      <button onClick={onLogout}>logout</button>
    </>
  );
};

export default Test;
