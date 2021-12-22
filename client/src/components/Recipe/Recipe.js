import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import styles from "./Recipe.module.css";
import API from "../../utils/API";
import { useDispatch, useSelector } from "react-redux";
import { allBooks } from "../../AllBooks";

function Recipe() {
  const params = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.recipe);
  const [currRecipe, setCurrRecipe] = useState();
  const [currBook, setCurrBook] = useState();

  useEffect(() => {
    API.singleQuery(params.recipe, "recipe").then((data) => {
      console.log(data.data);
      dispatch({ type: "recipe/recipeSelected", payload: data.data });
      setCurrRecipe(data.data[0]);
    });

    let tempBook = allBooks.find((book) => (book.title = params));
    setCurrBook(tempBook);
  }, []);

  const handleClick = () => {
    console.log(currBook);
  };

  return (
    <>
      {/* background image */}
      <div className={styles["mainImage"]}>
        <div className={styles["leftContent"]}>
          {/* <div className={styles["recipeTitle"]}> */}
          <RecipeTitle cover={currBook?.img} />
          {/* <button onClick={handleClick}>sup</button> */}
          {/* <h1>{currRecipe?.name}</h1> */}
          {/* </div> */}
        </div>

        {/* lemon recipe image */}
        <div className={styles["recipeImg"]}>
          {/* recipe contents */}
          <div className={styles["recipe"]}>
            <h2>{currRecipe?.name}</h2>
            <span className={styles["recipeUnderline"]}>
              <hr styles={{ color: "darkred" }} />
            </span>
          </div>
        </div>
        <div className={styles["bookCover"]}>
          <BookCover />
        </div>
      </div>
    </>
  );
}

export default Recipe;

const RecipeTitle = styled.div`
  /* display: flex;
  flex-direction: row; */
  background-image: ${(props) => `url('${props.cover}')`};
  opacity: 1;
  background-size: cover;
  width: 150px;
  height: 250px;
  border-radius: 8px;
  margin-left: 165px;
`;

const BookCover = styled.div`
  background-image: url("https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");

  background-size: cover;
  width: 150px;
  height: 250px;
  border-radius: 8px;
`;
