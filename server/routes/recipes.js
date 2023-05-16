import express from "express";
import { createRecipe, getRecipes } from "../controllers/recipes.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", protect, createRecipe);

export default router;
