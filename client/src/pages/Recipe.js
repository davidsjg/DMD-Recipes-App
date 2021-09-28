import React, { useContext, useEffect } from "react";
import styles from "./Recipe.module.css";
import RecipeContext from "../utils/RecipeContext";
import ColGrid from "../components/ColGrid/ColGrid";
import RowGrid from "../components/RowGrid/RowGrid";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import API from "../utils/API";
import QuantCol from "../components/QuantCol/QuantCol";

export default function Recipe(props) {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  const setCurrRecipe = props.updateCurrRecipe;

  console.log(props);

  //which input was entered by the user
  let searchParam = props.location.state;

  let historyRecipe = props.match.params.recipe;

  function handleClick() {
    console.log(currRecipe);
  }

  useEffect(() => {
    console.log("two search params below");
    console.log(historyRecipe);
    console.log(searchParam);
    API.singleQuery(historyRecipe, searchParam).then((data) => {
      // setIngredRecipes([data.data]);
      console.log("returned data below");
      console.log(data);
      setCurrRecipe(data.data[0]);
      console.log("currRecipe below");
      console.log(currRecipe);
    });
  }, []);

  return (
    <>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-6">
          <ListGroup.Item style={{ textAlign: "center" }}>
            Recipe: {currRecipe.name}
          </ListGroup.Item>
          <ListGroup.Item style={{ textAlign: "center" }}>
            Book: {currRecipe.book}
          </ListGroup.Item>
        </ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-6">
          <RowGrid>
            <ListGroup variant="flush">
              {typeof currRecipe.quantities !== "undefined"
                ? currRecipe.ingredients.map((ingred, index) => {
                    let quantContent = currRecipe.quantities[index];
                    return (
                      <>
                        <ListGroup.Item className={styles["items"]}>
                          {quantContent} {ingred}
                        </ListGroup.Item>
                      </>
                    );
                  })
                : console.log("no data yet")}
            </ListGroup>
          </RowGrid>
        </ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
      <RowGrid>
        <ColGrid size="md-3"></ColGrid>
        <ColGrid size="md-6">
          <ListGroup.Item style={{ textAlign: "center" }}>
            <Card>
              <Card.Body>{currRecipe.instructions}</Card.Body>
            </Card>
          </ListGroup.Item>
        </ColGrid>
        <ColGrid size="md-3"></ColGrid>
      </RowGrid>
    </>
  );
}
