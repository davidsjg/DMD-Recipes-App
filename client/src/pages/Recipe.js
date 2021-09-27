import React, { useContext, useEffect } from "react";
import RecipeContext from "../utils/RecipeContext";
import ColGrid from "../components/ColGrid/ColGrid";
import RowGrid from "../components/RowGrid/RowGrid";
import ListGroup from "react-bootstrap/ListGroup";

import API from "../utils/API";

export default function Recipe(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  const setCurrRecipe = props.updateCurrRecipe;

  //which input was entered by the user
  let searchParam = props.location.state;
  let ingredients = [];
  let quantities = [];

  let historyRecipe = props.match.params.recipe;

  function handleClick() {
    console.log(currRecipe);
  }

  useEffect(() => {
    API.singleQuery(historyRecipe, searchParam).then((data) => {
      // setIngredRecipes([data.data]);

      setCurrRecipe(data.data[0]);
      console.log("currRecipe below");
      console.log(currRecipe);
      ingredients = currRecipe.ingredients;
      quantities = currRecipe.quantities;
      console.log(ingredients);
    });
  }, []);

  let testArr = ["test", "fuck", "damnit", "shit"];

  return (
    <>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-6">
          <ListGroup.Item style={{ textAlign: "center" }}>
            {currRecipe.name}
          </ListGroup.Item>
        </ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-2">
          <ListGroup variant="flush">
            {typeof currRecipe.ingredients !== "undefined"
              ? currRecipe.ingredients.map((test) => {
                  return <ListGroup.Item>{test}</ListGroup.Item>;
                })
              : console.log("no data yet")}
          </ListGroup>
        </ColGrid>
        <ColGrid size="md-4">
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-6"></ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
    </>
  );
}
