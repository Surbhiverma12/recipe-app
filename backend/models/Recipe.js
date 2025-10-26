const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [String],
  steps: [String],
  image: String,
  translations: {
    hi: {
      title: String,
      description: String,
      ingredients: [String],
      steps: [String],
    },
    es: {
      title: String,
      description: String,
      ingredients: [String],
      steps: [String],
    },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
