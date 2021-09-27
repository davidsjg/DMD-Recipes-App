import React, { useContext, useEffect } from "react";
import RecipeContext from "../utils/RecipeContext";
import API from "../utils/API";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import RowGrid from "../components/RowGrid/RowGrid";
import ColGrid from "../components/ColGrid/ColGrid";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function MappedRecipes(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  const setCurrIngred = props.updateIngred;

  //which input was entered by the user
  let searchParam = props.location.state;

  let historyRecipe = props.match.params.recipe;

  useEffect(() => {
    // setIngredRecipes([data.data]);
    // console.log("return from history search");

    if (searchParam === "ingred") {
      API.singleQuery(historyRecipe, searchParam).then((data) => {
        setCurrIngred(data.data);
      });
    }
  }, []);

  function handleClick() {
    console.log(ingredRecipes);
  }

  return (
    <RowGrid>
      <ColGrid size="md-3"></ColGrid>
      <ColGrid size="md-6">
        {ingredRecipes.map((recipe) => {
          return (
            <ListGroup.Item style={{ textAlign: "center" }}>
              <p>
                {recipe.name} - {recipe.book}
              </p>
            </ListGroup.Item>
          );
        })}
      </ColGrid>
      <ColGrid size="md-3">
        <Button onClick={handleClick}>CLICK ME YOU FAK</Button>
      </ColGrid>
    </RowGrid>
  );
}
