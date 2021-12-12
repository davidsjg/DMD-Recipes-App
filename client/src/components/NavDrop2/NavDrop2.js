import React, { useContext, Component, Fragment } from "react";
import Select from "react-select";
import styles from "./NavDrop2.module.css";

import { useHistory } from "react-router-dom";

// import { Dropdown, DropdownButton } from "react-bootstrap";
import RecipeContext from "../../utils/RecipeContext";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function NavDrop2() {
  const { allTitles } = useContext(RecipeContext);

  let bookTitles = allTitles;
  const defaultOption = bookTitles[0];

  const history = useHistory();
  const routeChange = (e) => {
    let path = `/recipeSelect/${e}`;
    history.push({ pathname: path, state: "book" });
    window.location.reload(false);
  };

  const handleSelect = (e) => {
    routeChange(e);
  };

  const Dropdown2 = () => <Select options={bookTitles} />;

  return (
    <>
      {/* <Dropdown
        options={bookTitles}
        onChange={handleSelect}
        value={defaultOption}
        placeholder="Select Book"
        style={{ color: "red" }}
      /> */}

      <select
        name="books"
        placeholder="Select Book"
        className={styles["selectBook"]}
      >
        <option value="" disabled selected>
          Select Book
        </option>
        {bookTitles.map((book) => {
          return <option value={book}>{book}</option>;
        })}
        {/* <option value="volvo">Volvo</option> */}
      </select>
    </>
  );
}
