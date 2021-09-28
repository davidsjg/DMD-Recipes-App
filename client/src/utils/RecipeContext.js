import React from "react";

const RecipeContext = React.createContext({
  bookRecipes: [],
  ingredRecipes: [],
  courseRecipes: [],
  currRecipe: {},
  allBooks: [
    "Catering to Nobody",
    "Dying for Chocolate",
    "The Cereal Murders",
    "The Last Suppers",
    "Killer Pancake",
    "The Main Corpse",
    "The Grilling Season",
    "Prime Cut",
    "Tough Cookie",
    "Sticks & Scones",
    "Chopping Spree",
    "Double Shot",
    "Dark Tort",
    "Sweet Revenge",
    "Fatally Flaky",
    "Crunch Time",
    "The Whole Enchilada",
  ],
});

// const LakeConsumer = LakeContext.Consumer;

export default RecipeContext;
