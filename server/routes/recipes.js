import express from "express";

const router = express.Router();

router.get("/", getRecipes);

export default router;
