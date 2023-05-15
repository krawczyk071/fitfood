import express from "express";

import Menu from "../models/menu.js";

const router = express.Router();

export const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();

    res.status(200).json(menu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addToMenu = async (req, res) => {
  try {
    const newMenu = await Menu.create({
      recipeId: req.body.recipeId,
      userId: req.user.id,
    });

    res.status(200).json(newMenu);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
