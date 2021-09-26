import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import RecipeContext from "../utils/RecipeContext";
import API from "../utils/API";

export default function Recipe(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  const setCurrRecipe = props.updateCurrRecipe;

  //which input was entered by the user
  let searchParam = props.location.state;

  let historyRecipe = props.match.params.recipe;

  function handleClick() {
    console.log(currRecipe);
  }

  useEffect(() => {
    API.singleQuery(historyRecipe, searchParam).then((data) => {
      // setIngredRecipes([data.data]);

      setCurrRecipe(data.data[0]);
    });
  }, []);

  return <Button onClick={handleClick}>Sup BRAH</Button>;
}
