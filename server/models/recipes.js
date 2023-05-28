import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a recipe name!",
  },
  tags: [String],
  photo: String,
  ingredients: [String],
  directions: [String],
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
  author: String,
  hidden: Boolean,
});

// Define our indexes
recipeSchema.index({
  name: "text",
  directions: "text",
});

recipeSchema.statics.getTagsList = function () {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
};

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
