import React, { useContext, useEffect } from "react";
import RecipeContext from "..//utils/RecipeContext";
import API from "../utils/API";

export default function RecipeSelect(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipes } =
    useContext(RecipeContext);

  //which input was entered by the user
  let searchParam = props.location.state;

  return "hello from Recipe Select";
}
