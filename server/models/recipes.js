import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  tags: String,
  photo: String,
  ingredients: [String],
  directions: String,
  time: {
    type: Number,
    default: 60,
  },
  servings: Number,
  calories: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
