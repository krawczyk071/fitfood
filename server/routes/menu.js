import express from "express";
import { addToMenu, getMenu } from "../controllers/menu.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/", addToMenu);

export default router;
