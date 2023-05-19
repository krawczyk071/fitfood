import React from "react";
import Hero from "../components/Hero";
import Recipe from "../components/Recipe";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Homepage = () => {
  const recipes = useSelector((state) => state.recipes);

  let randRecipe;
  if (recipes.status === "success") {
    randRecipe =
      recipes.data[Math.ceil(Math.random() * (recipes.data.length - 1))];
  }
  return (
    <div className="container">
      <Hero />

      {recipes.status !== "success" ? (
        <Loader />
      ) : (
        <Recipe recipe={randRecipe} />
      )}
    </div>
  );
};

export default Homepage;
