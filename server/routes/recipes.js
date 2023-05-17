import express from "express";
import {
  createRecipe,
  delRecipe,
  editRecipe,
  getOneRecipe,
  getRecipes,
} from "../controllers/recipes.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", protect, createRecipe);
router
  .route("/:id")
  .get(getOneRecipe)
  .put(protect, editRecipe)
  .delete(protect, delRecipe);

export default router;
