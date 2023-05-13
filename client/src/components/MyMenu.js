import React from "react";
import { menu, recipes } from "../utils/data";
import RecipeList from "./RecipeList";

const MyMenu = () => {
  const my = recipes.filter((r) => menu.includes(r.id));
  return (
    <div className="mymenu">
      <h1 className="mymenu__title">Your favorite meals</h1>
      <RecipeList recipes={my} edit />
    </div>
  );
};

export default MyMenu;