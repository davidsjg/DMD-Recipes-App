import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import RecipeContext from "../../utils/RecipeContext";

export default function DisplayCard() {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);
  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
