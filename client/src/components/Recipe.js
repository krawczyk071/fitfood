import React from "react";
import { recipes } from "../utils/data";

const Recipe = ({ recipe }) => {
  if (!recipe) {
    recipe = recipes[0];
  }
  //change
  const user = true;

  return (
    <div className="recipe">
      <div className="recipe__name">
        <h1>{recipe.name}</h1>
      </div>
      <div className="recipe__photo">
        <img src={recipe.photo} alt="recipe" />
      </div>
      <div className="recipe__tags">
        {recipe.tags.map((t) => (
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
      <div className="recipe__author">
        <div className="recipe__author__name">
          <h2>Author</h2>
          <p>{recipe.author}</p>
        </div>
        {user && (
          <>
            <div className="recipe__author__edit">Edit</div>
            <div className="recipe__author__del">Delete</div>
          </>
        )}
      </div>
      <div className="recipe__add">
        <button className="btn">Save to MyMenu</button>
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
