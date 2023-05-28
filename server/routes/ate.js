import express from "express";
import { addToAte, delFromAte, getAteAgg } from "../controllers/ate.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAteAgg);
router.post("/", protect, addToAte);
router.route("/:id").delete(protect, delFromAte);

export default router;
