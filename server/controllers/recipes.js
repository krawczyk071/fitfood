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

export const getOneRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    res.status(200).json(recipe);
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
    author: req.user.username,
  });

  try {
    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const delRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id);

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
