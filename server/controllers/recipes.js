import express from "express";

import Recipe from "../models/recipes.js";

const router = express.Router();

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ hidden: { $ne: true } });

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
    hidden,
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
    hidden,
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

export const hidRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        upsert: true,
      }
    );
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const searchRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(
      { $text: { $search: req.query.q } },
      // add score field
      {
        score: { $meta: "textScore" },
      }
    )
      // the sort them
      .sort({
        score: { $meta: "textScore" },
      });
    // limit to only 5 results
    // .limit(5);

    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const searchRecipesByTag = async (req, res) => {
  const tag = req.params.tag;
  const tagQuery = tag || { $exists: true, $ne: [] };
  try {
    const tagsPromise = Recipe.getTagsList();
    const recipesPromise = Recipe.find({
      tags: tagQuery,
      hidden: { $ne: true },
    });
    const [tags, recipes] = await Promise.all([tagsPromise, recipesPromise]);

    res.status(200).json({ tags, recipes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// // with pagination
// export const getRecipes = async (req, res) => {
//   const page = req.params.page || 1;
//   const limit = 4;
//   const skip = page * limit - limit;

//   try {
//     const recipesPromise = Recipe.find()
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: "desc" });

//     const countPromise = Recipe.count();

//     const [recipes, count] = await Promise.all([recipesPromise, countPromise]);
//     const pages = Math.ceil(count / limit);

//     // res.status(200).json({
//     //   pageinfo: { current: page, last: pages, limit, skip },
//     //   recipes,
//     // });
//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
