import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  userId: String,
  recipeId: String,
});

const Menu = mongoose.model("Menu", menuSchema);

export default User;
