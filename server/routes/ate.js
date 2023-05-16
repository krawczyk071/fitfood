import express from "express";
import { addToAte, getAte } from "../controllers/ate.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAte);
router.post("/", protect, addToAte);

export default router;
