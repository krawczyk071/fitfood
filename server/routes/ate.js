import express from "express";
import { addToAte, delFromAte, getAte } from "../controllers/ate.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAte);
router.post("/", protect, addToAte);
router.route("/:id").delete(protect, delFromAte);

export default router;
