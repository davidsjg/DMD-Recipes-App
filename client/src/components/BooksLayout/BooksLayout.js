import React from "react";
import styles from "./BooksLayout.module.css";
import styled from "styled-components";

import RecipeContext from "../../utils/RecipeContext";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";
import { Link } from "react-router-dom";

function BooksLayout() {
  const { allTitles } = useContext(RecipeContext);

  console.log(allBooks);

  return (
    <>
      <h5 className={styles["header"]}>Recipes by Book</h5>
      <div className={styles["booksLayout__container"]}>
        {allBooks.map(({ title, cName, img }, index) => {
          return (
            <aside className={styles["bookData"]} key={index}>
              <Link to={`/book/${cName}`} className={styles["bookLink"]}>
                <BookCover img={img} />
                {/* <div className={styles["bookCover"]} /> */}
                <span className={styles["tempImage"]}>
                  <span>{title}</span>
                </span>
              </Link>
            </aside>
          );
        })}
      </div>
    </>
  );
}

export default BooksLayout;

const BookCover = styled.img`
  background-image: ${(props) => `url('${props.img}')`};
  height: 190px;
  width: 100px;
  border-radius: 3px;
  background-position: center;
  background-size: cover;
`;
