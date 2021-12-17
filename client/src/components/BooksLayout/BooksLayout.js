import React, { useEffect } from "react";
import styles from "./BooksLayout.module.css";
import styled from "styled-components";
import { useContext } from "react";
import { allBooks } from "../../AllBooks";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";

import background from "./background4.jpeg";

function BooksLayout() {
  const recipes = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  console.log(recipes);

  useEffect(() => {
    //    historyRecipe = 'Catering to Nobody', searchParam = 'book'
    API.singleQuery("allBooks", "allRecipes").then((recipe) => {
      console.log(recipe);
      // dispatch({ type: "recipe/recipeSelected", payload: recipe });
    });
  }, []);

  const handleClick = (e) => () => {
    let tempRecipes = allBooks.find((book) => book.cName === e);

    console.log(tempRecipes);
  };
  const handleClick2 = () => {
    console.log(recipes);
  };

  return (
    <>
      <button onClick={handleClick2}>Click me</button>
      <MainBook background={background}> </MainBook>
      <div className={styles["mainDisplay"]}>
        <h5 className={styles["header"]}>Recipes by Book</h5>
        <div className={styles["booksLayout__container"]}>
          {allBooks.map(({ title, cName, img }, index) => {
            return (
              <aside className={styles["bookData"]} key={index}>
                <Link
                  to={`/bookPage/${cName}`}
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
  height: 650px;
  width: 100%;
  margin-right: 100px;

  @media (max-width: 768px) {
    height: 1075px;
    margin-top: 535px;
    border-radius: 5px;
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
