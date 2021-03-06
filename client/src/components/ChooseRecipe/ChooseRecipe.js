import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./ChooseRecipe.module.css";
import { useParams } from "react-router-dom";
import { allBooks } from "../../AllBooks";
import { doneBooks } from "../../AllBooks";
import styled from "styled-components";
import API from "../../utils/API";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ChooseRecipe() {
  let params = useParams();
  let recipes = useSelector((state) => state.recipe.recipe);
  const dispatch = useDispatch();

  let courseArray = ["appetizer", "breakfast", "main", "dessert"];

  const allTitles = doneBooks.map((book) => {
    return book.title;
  });

  // const titleFound = console.log(params);

  console.log(params.book);

  useEffect(() => {
    if (allTitles.find((title) => title === params.book)) {
      API.singleQuery(params.book, "book").then((recipes) => {
        console.log(recipes.data);
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
        // window.location.reload(false);
      });
    } else if (courseArray.find((course) => course === params.book)) {
      API.singleQuery(params.book, "course").then((recipes) => {
        console.log(recipes.data);
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
      });
    } else {
      API.singleQuery(params.book, "ingred").then((recipes) => {
        dispatch({ type: "recipe/recipeSelected", payload: recipes.data });
      });
    }
  }, [params]);

  return (
    <>
      <MainImage>
        <div className={styles["mainContain"]}>
          {/* <div className={styles["imgDisplay"]}>
          <BookImage img={"/images/lotBooks.jpeg"} />
          <div className={styles["changeBook"]}>
            <p>change Book</p>
          </div>
        </div> */}

          <div className={styles["recipesDisplay"]}>
            <h3 className={styles["recipesHeader"]}>Recipes</h3>
            <div className={styles["recipeContain"]}>
              {recipes.length > 1
                ? recipes.map(({ name }) => {
                    return (
                      <Link
                        to={`/recipe/${name}`}
                        className={styles["recipeList"]}
                      >
                        {/* <span className={styles["spanEnya"]}>~ </span> */}
                        {name}
                        {/* <span className={styles["spanEnya"]}> ~</span> */}
                      </Link>
                    );
                  })
                : console.log("nada")}
            </div>
          </div>
        </div>
      </MainImage>
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
  background-repeat: repeat;
  background-size: cover;
  z-index: -1;
  /* height: 580px; */
  height: fit-content;

  @media (max-width: 768px) {
    height: 1075px;
    margin-top: 185px;
    border-radius: 5px;
  }
  @media (max-width: 415px) {
    height: fit-content;
    margin-top: 185px;
    border-radius: 5px;
  }
`;

const BookImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 100px;
  height: 483px;
  width: 400px;
  opacity: 0.5;
  /* margin-right: 50px; */
`;
