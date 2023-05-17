import express from "express";
import {
  createRecipe,
  editRecipe,
  getOneRecipe,
  getRecipes,
} from "../controllers/recipes.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", protect, createRecipe);
router.route("/:id").get(getOneRecipe).put(protect, editRecipe);

export default router;
