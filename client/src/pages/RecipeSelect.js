import React, { useContext } from "react";
import RecipeContext from "..//utils/RecipeContext";
import { useHistory } from "react-router-dom";

export default function RecipeSelect() {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipes } =
    useContext(RecipeContext);

  console.log(ingredRecipes);

  return "hello from Recipe Select";
}
