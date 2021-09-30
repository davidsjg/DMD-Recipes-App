import React, { useContext, useEffect } from "react";
import Link from "react-router-dom/Link";
import RecipeContext from "../utils/RecipeContext";
import API from "../utils/API";
import RowGrid from "../components/RowGrid/RowGrid";
import ColGrid from "../components/ColGrid/ColGrid";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function MappedRecipes(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe, allTitles } =
    useContext(RecipeContext);

  const setCurrIngred = props.updateIngred;

  //which input was entered by the user
  let searchParam = props.location.state;
  let recipeTitles = [];
  let historyRecipe = props.match.params.recipe;
  let tempData;
  let newArray = [];
  let bookTitles;
  console.log("OG bookTitles below");
  console.log(bookTitles);

  useEffect(() => {
    bookTitles = [];

    API.singleQuery(historyRecipe, searchParam).then((data) => {
      setCurrIngred(data.data);
    });

    bookTitles = allTitles[0];
    console.log("book titles below");
    console.log(bookTitles);
  }, []);

  function handleClick() {
    //array of recipe objects
    console.log(ingredRecipes);
  }

  return (
    <RowGrid>
      <ColGrid size="md-3"></ColGrid>
      <ColGrid size="md-6">
        {ingredRecipes.map((recipe, index) => {
          return (
            <ListGroup.Item key={index} style={{ textAlign: "center" }}>
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
