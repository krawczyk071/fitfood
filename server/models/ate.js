import mongoose from "mongoose";

const ateSchema = mongoose.Schema({
  userId: String,
  recipeId: String,
  date: String,
});

const Ate = mongoose.model("Ate", ateSchema);

export default Ate;
