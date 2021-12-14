import React from "react";
import styles from "./BooksLayout.module.css";
import styled from "styled-components";

import RecipeContext from "../../utils/RecipeContext";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";
import { Link } from "react-router-dom";

import background from "./background4.jpeg";

function BooksLayout() {
  const { allTitles } = useContext(RecipeContext);

  return (
    <>
      <MainBook background={background}> </MainBook>
      <div className={styles["mainDisplay"]}>
        <h5 className={styles["header"]}>Recipes by Book</h5>
        <div className={styles["booksLayout__container"]}>
          {allBooks.map(({ title, cName, img }, index) => {
            return (
              <aside className={styles["bookData"]} key={index}>
                <Link to={`/book/${cName}`} className={styles["bookLink"]}>
                  <BookCover img={img} />
                  <span className={styles["bookTitle"]}>
                    <span>{title}</span>
                  </span>
                </Link>
              </aside>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BooksLayout;

const MainBook = styled.div`
  background-image: ${(props) => `url('${props.background}')`};
  position: absolute;
  /* margin: 10px 40px; */
  margin-top: 10px;

  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  z-index: -1;
  /* height: 730px; */
  height: 630px;
  width: 100%;
`;

const BookCover = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  height: 154px;
  width: 95px;
  border: none;
  border-radius: 3px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;