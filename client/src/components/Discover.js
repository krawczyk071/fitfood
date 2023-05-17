import React, { useEffect } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/features/recipesSlice";
import Loader from "./Loader";

const Discover = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRecipes());
  // }, [dispatch]);

  return (
    <div className="discover">
      <div className="discover__top">
        <h1 className="discover__top__title">Browse recipes</h1>
        <div className="discover__top__search">
          <Search />
        </div>
      </div>
      {recipes.state === "loading" ? (
        <Loader />
      ) : (
        <RecipeList recipes={recipes.data} />
      )}
    </div>
  );
};

export default Discover;
