import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/users.js";
import recipesRoutes from "./routes/recipes.js";
import menuRoutes from "./routes/menu.js";
import ateRoutes from "./routes/ate.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello to FitFood API");
});
app.use("/auth", usersRoutes);
app.use("/recipes", recipesRoutes);
app.use("/menu", menuRoutes);
app.use("/ate", ateRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
