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
    API.singleQuery(historyRecipe, searchParam).then((data) => {
      // setIngredRecipes([data.data]);
      // console.log("return from history search");
      console.log(data.data);

      if (searchParam === "ingred") {
        setCurrIngred(data.data);
      }
    });
  }, []);

  function handleClick() {
    console.log(ingredRecipes);
  }

  return (
    <RowGrid>
      <ColGrid size="md-3"></ColGrid>
      <ColGrid size="md-6">
        <ListGroup.Item style={{ textAlign: "center" }}>
          Recipe: {currRecipe.name}
        </ListGroup.Item>
      </ColGrid>
      <ColGrid size="md-3">
        <Button onClick={handleClick}>CLICK ME YOU FAK</Button>
      </ColGrid>
    </RowGrid>
  );
}
