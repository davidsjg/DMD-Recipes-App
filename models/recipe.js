const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  book: { type: String },
  quantities: { type: Array },
  ingredients: { type: Array },
  glutenFree: { type: Boolean },
  lowFat: { type: Boolean },
  course: { type: String },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
