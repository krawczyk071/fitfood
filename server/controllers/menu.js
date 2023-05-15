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
  const { userId, recipeId } = req.body;

  const newMenu = new Menu({
    userId,
    recipeId,
  });

  try {
    await newMenu.save();

    res.status(201).json(newMenu);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
