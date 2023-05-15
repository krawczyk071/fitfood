import express from "express";
import { addUser, getMe, loginUser } from "../controllers/users.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
