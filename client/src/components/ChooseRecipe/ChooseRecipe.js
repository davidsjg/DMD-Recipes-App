import React, { useEffect } from "react";
import styles from "./ChooseRecipe.module.css";
import { useParams } from "react-router-dom";
import { allBooks } from "../../AllBooks";
import styled from "styled-components";
import API from "../../utils/API";
import { useSelector } from "react-redux";

function ChooseRecipe() {
  let params = useParams();
  let recipes = useSelector((state) => state.recipe.recipe);

  console.log(recipes);

  const currBook = allBooks.find((book) => book.cName === params.book);

  return (
    <>
      <MainImage></MainImage>
      <div className={styles["mainContain"]}>
        <div className={styles["imgDisplay"]}>
          <BookImage img={currBook.img} />
          <div className={styles["changeBook"]}>
            <p>change Book</p>
          </div>
        </div>
        <div className={styles["recipesDisplay"]}>
          {recipes.map(({ name }) => {
            return <div>{name}</div>;
          })}
          <p>Recipes</p>
        </div>
      </div>
    </>
  );
}

export default ChooseRecipe;

const MainImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 74px;
  border-radius: 20px;

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

const BookImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  height: 152px;
  width: 100px;
`;
