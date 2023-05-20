import express from "express";
import {
  createRecipe,
  delRecipe,
  editRecipe,
  getOneRecipe,
  getRecipes,
  searchRecipes,
  searchRecipesByTag,
} from "../controllers/recipes.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/page/:page", getRecipes);
router.get("/search", searchRecipes);
router.get("/tags", searchRecipesByTag);
router.get("/tags/:tag", searchRecipesByTag);
router.post("/", protect, createRecipe);
router
  .route("/:id")
  .get(getOneRecipe)
  .put(protect, editRecipe)
  .delete(protect, delRecipe);

export default router;
