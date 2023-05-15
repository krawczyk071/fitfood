import express from "express";
import { addToMenu, getMenu } from "../controllers/menu.js";

const router = express.Router();

router.get("/", getMenus);
router.post("/", addToMenu);

export default router;
