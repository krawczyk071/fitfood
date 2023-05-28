import express from "express";

import Ate from "../models/ate.js";

const router = express.Router();

export const getAte = async (req, res) => {
  try {
    const ate = await Ate.find({ userId: req.user.id });

    res.status(200).json(ate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addToAte = async (req, res) => {
  try {
    const newAte = await Ate.create({
      recipeId: req.body.recipeId,
      date: req.body.date,
      userId: req.user.id,
    });

    res.status(200).json(newAte);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const delFromAte = async (req, res) => {
  try {
    await Ate.findByIdAndRemove(req.params.id);

    // if (ate.userId.toString() !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAteAgg = async (req, res) => {
  try {
    const ate = await Ate.aggregate([
      {
        $match: {
          userId: req.user.id,
        },
      },
      {
        $addFields: {
          obj_recipeId: {
            $toObjectId: "$recipeId",
          },
        },
      },
      {
        $lookup: {
          from: "recipes",
          localField: "obj_recipeId",
          foreignField: "_id",
          as: "recipeData",
        },
      },
      {
        $unwind: {
          path: "$recipeData",
        },
      },
      {
        $group: {
          _id: "$date",
          dailyCalories: {
            $sum: "$recipeData.calories",
          },
          mealsArr: {
            $push: { recipe: "$recipeData", mealId: "$_id" },
          },
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);

    res.status(200).json(ate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
