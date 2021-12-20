import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./ChooseRecipe.module.css";
import { useParams } from "react-router-dom";
import { allBooks } from "../../AllBooks";
import styled from "styled-components";
import API from "../../utils/API";
import { useSelector } from "react-redux";

function ChooseRecipe() {
  let params = useParams();
  let recipes = useSelector((state) => state.recipe.recipe);
  const dispatch = useDispatch();

  let courseArray = ["appetizer", "breakfast", "main", "dessert"];

  const allTitles = allBooks.map((book) => {
    return book.title;
  });

  const titleFound = console.log(params);

  useEffect(() => {
    if (allTitles.find((title) => title === params.book)) {
      console.log("its a book title");
      API.singleQuery(params.book, "book").then((recipes) => {
        console.log(recipes.data);
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
      });
    } else if (courseArray.find((course) => course === params.book)) {
      console.log("its a course");
      API.singleQuery(params.book, "course").then((recipes) => {
        console.log(recipes.data);
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
      });
    } else {
      API.singleQuery(params.book, "ingred").then((recipes) => {
        console.log(recipes.data);
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
      });
    }

    // API.singleQuery(params.book, "book").then((recipes) => {
    //   console.log(recipes.data);
    //   dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
    // });
  }, []);

  console.log(recipes);

  const currBook = allBooks.find((book) => book.cName === params.book);

  return (
    <>
      <MainImage></MainImage>
      <div className={styles["mainContain"]}>
        <div className={styles["imgDisplay"]}>
          {/* {currBook.img && <BookImage img={currBook.img} />} */}
          <div className={styles["changeBook"]}>
            <p>change Book</p>
          </div>
        </div>

        <div className={styles["recipesDisplay"]}>
          <h3 style={{ textDecoration: "underline" }}>Recipes</h3>
          {recipes.length > 1
            ? recipes.map(({ name }) => {
                return <div>{name}</div>;
              })
            : console.log("nada")}
        </div>
      </div>
    </>
  );
}

export default ChooseRecipe;

const MainImage = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"); */
  background-image: url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80");

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 74px;
  margin-left: 7px;
  margin-right: 7px;

  background-repeat: no-repeat;
  background-size: cover;

  z-index: -1;

  height: 580px;

  @media (max-width: 768px) {
    height: 1075px;
    margin-top: 535px;
    border-radius: 5px;
  }
`;

const BookImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  height: 152px;
  width: 100px;
`;
