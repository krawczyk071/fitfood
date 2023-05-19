import React from "react";
// import { recipes } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import AddToMenuBtn from "./AddToMenuBtn";
import { delRecipe } from "../redux/features/recipesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe, toggleEdit }) => {
  const { data: user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onEdit() {
    toggleEdit();
  }
  function onDelete() {
    try {
      dispatch(delRecipe(recipe._id));
      toast.success("Recipe deleted");
      navigate(`/`);
    } catch (err) {
      toast.error(err.message);
    }
  }

  // if (!recipe) {
  //   recipe = recipes[0];
  // }
  //change

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
        {user && user.username === recipe.author && (
          <>
            <div className="recipe__author__edit" onClick={onEdit}>
              Edit
            </div>
            <div className="recipe__author__del" onClick={onDelete}>
              Delete
            </div>
          </>
        )}
      </div>
      <div className="recipe__add">
        {user && <AddToMenuBtn recipeId={recipe._id} />}
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
