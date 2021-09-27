import React, { useContext, useEffect } from "react";
import Link from "react-router-dom/Link";
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

  let tempArr = [];

  useEffect(() => {
    // setIngredRecipes([data.data]);
    // console.log("return from history search");

    API.singleQuery(historyRecipe, searchParam).then((data) => {
      setCurrIngred(data.data);
    });

    let path = "/recipe/" + historyRecipe;
  }, []);

  function handleClick() {
    tempArr = ingredRecipes.slice();
    console.log(ingredRecipes);
  }

  return (
    <RowGrid>
      <ColGrid size="md-3"></ColGrid>
      <ColGrid size="md-6">
        {ingredRecipes.map((recipe) => {
          return (
            <ListGroup.Item style={{ textAlign: "center" }}>
              <Link
                to={{
                  pathname: "/recipe/" + recipe.name,
                  state: "recipe",
                }}
              >
                {recipe.name} - {recipe.book}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ColGrid>
      <ColGrid size="md-3">
        <Button onClick={handleClick}>CLICK ME</Button>
      </ColGrid>
    </RowGrid>
  );
}
