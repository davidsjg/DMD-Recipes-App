import React, { useEffect } from "react";
import styles from "./BooksLayout.module.css";
import styled from "styled-components";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";
import { doneBooks } from "../../AllBooks";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";

import background from "./background4.jpeg";

function BooksLayout() {
  const books = useSelector((state) => state.book.book);

  const dispatch = useDispatch();

  useEffect(() => {
    API.singleQuery("allBooks", "allRecipes").then((recipe) => {
      let recipeDispatch = recipe.data[0].ingredients;
      dispatch({ type: "book/bookSelected", payload: recipeDispatch });
    });
  }, []);

  const handleClick = (e) => () => {
    let temp = allBooks.find((book) => book.cName === e);
    let bookTitle = temp.title;

    API.singleQuery(bookTitle, "book").then((recipes) => {
      dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
    });
  };
  const handleClick2 = () => {
    console.log(books);
  };

  return (
    <>
      <MainBook background={background}> </MainBook>
      {/* <button onClick={handleClick2}>click me</button> */}
      <div className={styles["mainDisplay"]}>
        <h3 className={styles["header"]}>Recipes by Book</h3>
        <div className={styles["booksLayout__container"]}>
          {books.length > 0
            ? doneBooks.map(({ title, cName, img }, index) => {
                return (
                  <aside className={styles["bookData"]} key={index}>
                    <Link
                      to={`/chooseRecipe/${title}`}
                      onClick={handleClick(cName)}
                      className={styles["bookLink"]}
                    >
                      <BookCover img={img} />
                      <span className={styles["bookTitle"]}>
                        <span>{title}</span>
                      </span>
                    </Link>
                  </aside>
                );
              })
            : console.log("nada")}
        </div>
      </div>
    </>
  );
}

export default BooksLayout;

const MainBook = styled.div`
  background-image: ${(props) => `url('${props.background}')`};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* margin: 10px 40px; */
  margin-top: 435px;

  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  z-index: -1;
  /* height: 730px; */
  height: 290px;
  width: 100%;
  margin-right: 100px;

  @media (max-width: 768px) {
    margin-top: 540px;
    /* width: 738px; */
    /* margin-left: 8px; */

    border-radius: 5px;
  }

  @media (max-width: 501px) {
    height: 350px;
    width: px;
    /* margin: 0 8px; */
  }
  @media (max-width: 414px) {
    height: 300px;
  }
  /* @media (max-width: 1276px) {
    height: 1075px;
    width: 1235px;
    border-radius: 5px;
  } */
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
