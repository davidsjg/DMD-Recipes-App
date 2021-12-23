import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BookDropdown.module.css";
import { allBooks } from "../../AllBooks";
import { doneBooks } from "../../AllBooks";
import API from "../../utils/API";

function BookDropdown() {
  const [allTitles, setAllTitles] = useState(["catering"]);
  const dispatch = useDispatch();
  useEffect(() => {
    let tempTitles;
    tempTitles = doneBooks.map((book) => {
      return book.title;
    });
    setAllTitles(tempTitles);
  }, []);

  return (
    <>
      <div className={styles["dropdown"]}>
        <button className={styles["dropbtn"]}>Select Book</button>

        <div className={styles["dropdown-content"]}>
          {allTitles.map((title) => {
            return <Link to={`/chooseRecipe/${title}`}>{title}</Link>;
          })}
          {/* {allTitles.length > 1
            ? allTitles.map((title) => {
                return <Link to={`/chooseRecipe/${title}`}>{title}</Link>;
              })
            : null} */}
        </div>
      </div>
    </>
  );
}

export default BookDropdown;
