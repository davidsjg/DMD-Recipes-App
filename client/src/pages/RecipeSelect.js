import React, { useContext } from "react";
import RecipeContext from "..//utils/RecipeContext";
import { useHistory } from "react-router-dom";

export default function RecipeSelect(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipes } =
    useContext(RecipeContext);

  console.log("currRecipe below");
  console.log(props);

  return "hello from Recipe Select";
}
