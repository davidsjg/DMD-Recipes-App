import React from "react";
import styles from "./BooksLayout.module.css";

import RecipeContext from "../../utils/RecipeContext";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";

function BooksLayout() {
  const { allTitles } = useContext(RecipeContext);

  console.log(allBooks);

  return (
    <div>
      <div className={styles["booksLayout__container"]}>
        {allBooks.map(({ title, cName }, index) => {
          console.log(cName);

          return (
            <aside className={styles["bookData"]} key={index}>
              <div>{title}</div>
              <span className={styles["tempImage"]}>
                <span>{title}</span>
              </span>
            </aside>
          );
        })}
      </div>
    </div>
  );
}

export default BooksLayout;
