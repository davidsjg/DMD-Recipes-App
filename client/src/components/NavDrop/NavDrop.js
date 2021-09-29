import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import { Dropdown, DropdownButton } from "react-bootstrap";
import RecipeContext from "../../utils/RecipeContext";

export default function NavDrop() {
  const { allBooks } = useContext(RecipeContext);

  let bookTitles = allBooks[0];

  const history = useHistory();
  const routeChange = (e) => {
    let path = `/recipeSelect/${e}`;
    history.push({ pathname: path, state: "book" });
    window.location.reload(false);
  };

  const handleSelect = (e) => {
    routeChange(e);
    // browserHistory.push({pathname: `/recipeSelect/${e}`, state: {book}});
    // <Redirect
    //   to={{
    //     pathname: `/recipeSelect/${e}`,
    //     state: { message: 'hello, im a passed message!' }
    //   }}
    // />;
  };

  return (
    <>
      <DropdownButton
        alignright="true"
        title="Select Book"
        // id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        {/* {bookTitles.map((bookTitle, i) => {
          return (
            <ListGroup.Item style={{ textAlign: "center" }}>
              <a
                to={{
                  pathname: "/recipeSelect/" + bookTitle,
                  state: "book",
                }}
                // href={"/recipeSelect/" + bookTitle + "?book"}
              >
                {bookTitle}
              </a>
            </ListGroup.Item>
          );
        })} */}

        {bookTitles.map((book, i) => {
          return (
            <Dropdown.Item eventKey={book} key={i} href="">
              {book}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </>
  );
}
