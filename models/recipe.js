const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  book: { type: String },
  quantities: { type: Array },
  ingredients: { type: Array },
  course: { type: String },
  glutenFree: { type: Boolean },
  lowFat: { type: Boolean },
  instructions: { type: String },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
