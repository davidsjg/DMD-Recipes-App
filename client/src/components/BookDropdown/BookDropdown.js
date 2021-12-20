import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BookDropdown.module.css";
import { allBooks } from "../../AllBooks";
import API from "../../utils/API";

function BookDropdown() {
  const [allTitles, setAllTitles] = useState(["catering"]);
  const dispatch = useDispatch();
  useEffect(() => {
    let tempTitles;
    tempTitles = allBooks.map((book) => {
      return book.title;
    });
    setAllTitles(tempTitles);
  }, []);

  return (
    <>
      <div className={styles["dropdown"]}>
        <button className={styles["dropbtn"]}>Select Book</button>

        <div className={styles["dropdown-content"]}>
          {allTitles.length > 1
            ? allTitles.map((title) => {
                return <a href={`/chooseRecipe/${title}`}>{title}</a>;
              })
            : console.log("nada")}
        </div>
      </div>
    </>
  );
}

export default BookDropdown;
