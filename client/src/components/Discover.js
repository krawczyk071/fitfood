import React from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import { recipes } from "../utils/data";

const Discover = () => {
  return (
    <div className="discover">
      <h1 className="discover__title">Browse recipeies</h1>
      <Search />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Discover;
