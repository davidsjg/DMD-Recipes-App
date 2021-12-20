import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BookDropdown.module.css";
import { allBooks } from "../../AllBooks";

function BookDropdown() {
  const [allTitles, setAllTitles] = useState(["catering"]);
  useEffect(() => {
    let tempTitles;
    tempTitles = allBooks.map((book) => {
      return book.title;
    });
    setAllTitles(tempTitles);
  }, []);

  const handleClick = () => {
    console.log(allTitles.length);
  };

  return (
    <>
      <div className={styles["dropdown"]}>
        <button className={styles["dropbtn"]} onClick={handleClick}>
          Select Book
        </button>

        <div className={styles["dropdown-content"]}>
          {allTitles.length > 1
            ? allTitles.map((title) => {
                return <a href="#">{title}</a>;
              })
            : console.log("nada")}
        </div>
      </div>
    </>
  );
}

export default BookDropdown;
