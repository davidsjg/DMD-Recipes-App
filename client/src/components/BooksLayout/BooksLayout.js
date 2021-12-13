import React from "react";
import styles from "./BooksLayout.module.css";

import RecipeContext from "../../utils/RecipeContext";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";

function BooksLayout() {
  const { allTitles } = useContext(RecipeContext);

  console.log(allBooks);

  return (
    <>
      <h4 className={styles["header"]}>Select Book for Recipes</h4>
      <div className={styles["booksLayout__container"]}>
        {allBooks.map(({ title, cName, img }, index) => {
          return (
            <aside className={styles["bookData"]} key={index}>
              <img src={img} alt="book cover" className={styles["bookCover"]} />
              <span className={styles["tempImage"]}>
                <span>{title}</span>
              </span>
            </aside>
          );
        })}
      </div>
    </>
  );
}

export default BooksLayout;
