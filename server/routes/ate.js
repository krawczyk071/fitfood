import express from "express";
import { addToAte, getAte } from "../controllers/menu.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAte);
router.post("/", protect, addToAte);

export default router;
