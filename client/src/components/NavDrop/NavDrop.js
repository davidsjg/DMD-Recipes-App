import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";

export default function NavDrop() {
  const [state, dispatch] = useStoreContext();

  console.log(state);

  return (
    <NavDropdown
      title={
        <span className="text-link my-auto " style={{ color: "black" }}>
          Dropdown
        </span>
      }
      id="basic-nav-dropdown"
    >
      {state.allBooks.map((bookTitle, i) => {
        return (
          <NavDropdown.Item key={i} href="#action/3.1">
            {bookTitle}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
