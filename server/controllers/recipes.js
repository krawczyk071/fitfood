import express from "express";

import Recipe from "../models/recipes.js";

const router = express.Router();

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const {
    name,
    tags,
    photo,
    ingredients,
    directions,
    time,
    servings,
    calories,
  } = req.body;

  const newRecipe = new Recipe({
    name,
    tags,
    photo,
    ingredients,
    directions,
    time,
    servings,
    calories,
  });

  try {
    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
