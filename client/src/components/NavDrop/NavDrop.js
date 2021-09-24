import React from "react";
import { Redirect } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import history from "../history";

import { SET_CURRENT_BOOK } from "../../utils/actions";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";

export default function NavDrop() {
  const [state, dispatch] = useStoreContext();

  const handleSelect = (e) => {
    console.log("event =");
    console.log(e);

    API.singleQuery(e, "book").then((data) => {
      dispatch({
        type: SET_CURRENT_BOOK,
        book: data.data,
      });
    });

    let newRedirect = `/books/${e}`;

    return <Redirect to={newRedirect} />;
  };

  console.log(state);

  return (
    <DropdownButton
      alignright="true"
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      {state.allBooks.map((bookTitle, i) => {
        return (
          <Dropdown.Item eventKey={bookTitle} key={i}>
            {bookTitle}
          </Dropdown.Item>
        );
      })}

      <Dropdown.Divider />
      <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
    </DropdownButton>
  );
}
