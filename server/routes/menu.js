import express from "express";
import { addToMenu, delFromMenu, getMenu } from "../controllers/menu.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMenu);
router.post("/", protect, addToMenu);
router.route("/:id").delete(protect, delFromMenu);

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

export default router;
