import React, { useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "react-router-dom/Link";
import RecipeContext from "../../utils/RecipeContext";

export default function CardDisplayBooks() {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe, allBooks } =
    useContext(RecipeContext);

  let booksArr = [];

  useEffect(() => {}, []);

  return (
    <ListGroup>
      <ListGroup.Item>SELECT BY BOOK</ListGroup.Item>

      {allBooks[0].map((book) => {
        return <ListGroup.Item>{book}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
