import React, { useContext, useEffect } from "react";
import RecipeContext from "../utils/RecipeContext";
import API from "../utils/API";

export default function MappedRecipes(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipes } =
    useContext(RecipeContext);

  //which input was entered by the user
  let searchParam = props.location.state;

  let historyRecipe = props.match.params.recipe;

  useEffect(() => {
    API.singleQuery(historyRecipe, searchParam).then((data) => {
      // setIngredRecipes([data.data]);
      // console.log("return from history search");
      console.log(data.data);
    });
  }, []);

  return "hello from Recipe Select";
}
