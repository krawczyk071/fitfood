import React from "react";
import { recipes } from "../utils/data";

const Recipe = () => {
  const recipe = recipes[0];
  return (
    <div className="recipe">
      <div className="recipe__name">
        <h1>{recipe.name}</h1>
      </div>
      <div className="recipe__photo">
        <img src={recipe.photo} alt="recipe" />
      </div>
      <div className="recipe__tags">
        {recipe.tags.split(",").map((t) => (
          <span>{t}</span>
        ))}
      </div>
      <div className="recipe__ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <div className="recipe__directions">
        <h2>Directions</h2>
        <p>{recipe.directions}</p>
      </div>
      <div className="recipe__info">
        <div className="recipe__info__item">
          <h2>time</h2>
          <p>{recipe.time}</p>
        </div>
        <div className="recipe__info__item">
          <h2>servings</h2>
          <p>{recipe.servings}</p>
        </div>
        <div className="recipe__info__item">
          <h2>calories</h2>
          <p>{recipe.calories}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
