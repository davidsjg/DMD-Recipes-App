import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import RecipeContext from "../../utils/RecipeContext";
import API from "../../utils/API";

export default function NavDrop() {
  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  console.log(RecipeContext);

  const handleSelect = (e) => {
    console.log("event =");
    console.log(e);

    API.singleQuery(e, "book").then((data) => {
      console.log(data);
    });

    let newRedirect = `/books/${e}`;

    return <Redirect to={newRedirect} />;
  };

  return (
    <DropdownButton
      alignright="true"
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      {/* {state.allBooks.map((bookTitle, i) => {
        return (
          <Dropdown.Item eventKey={bookTitle} key={i}>
            {bookTitle}
          </Dropdown.Item>
        );
      })} */}

      <Dropdown.Divider />
      <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
    </DropdownButton>
  );
}
