import React, { useContext, useEffect } from "react";
import RecipeContext from "..//utils/RecipeContext";
import API from "../utils/API";

export default function RecipeSelect(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipes } =
    useContext(RecipeContext);

  console.log("currRecipe below");
  console.log(props.match.params.recipe);
  let historyRecipe = props.match.params.recipe;

  useEffect(() => {
    API.singleQuery(historyRecipe, "recipe").then((data) => {
      // setIngredRecipes([data.data]);
      console.log("return from history search");
      console.log(data.data);
    });
  }, []);

  return "hello from Recipe Select";
}
