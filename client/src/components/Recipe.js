import React from "react";
import { recipes } from "../utils/data";

const Recipe = () => {
  const recipe = recipes[0];
  return (
    <div>
      <h1>{recipe.name}</h1>
      Name,tag,foto,skladniki,instrukcje,time,servings,calories,
    </div>
  );
};

export default Recipe;
