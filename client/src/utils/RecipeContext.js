import React from "react";

const RecipeContext = React.createContext({
  bookRecipes: [],
  ingredRecipes: [],
  courseRecipes: [],
  currRecipe: {},
});

// const LakeConsumer = LakeContext.Consumer;

export default RecipeContext;
