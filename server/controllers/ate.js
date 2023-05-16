import express from "express";

import Ate from "../models/ate.js";

const router = express.Router();

export const getAte = async (req, res) => {
  try {
    const ate = await Ate.find();

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
