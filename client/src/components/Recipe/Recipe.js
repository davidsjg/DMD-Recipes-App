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

  let ingredArray = currRecipe?.ingredients;

  console.log(ingredArray);

  useEffect(() => {
    API.singleQuery(params.recipe, "recipe").then((data) => {
      console.log(data.data[0]);
      dispatch({ type: "recipe/recipeSelected", payload: data.data });
      setCurrRecipe(data.data[0]);
    });

    let tempBook = allBooks.find((book) => (book.title = params));
    setCurrBook(tempBook);
  }, []);

  const handleClick = () => {
    console.log(currRecipe);
  };

  return (
    <>
      {/* background image */}
      <div className={styles["mainImage"]}>
        <div className={styles["leftContent"]}>
          <RecipeTitle cover={currBook?.img} />
          {/* <button onClick={handleClick}>sup</button> */}
        </div>

        <div className={styles["recipeImg"]}>
          <div className={styles["recipe"]}>
            <h2>{currRecipe?.name}</h2>

            <span className={styles["recipeUnderline"]}>
              <hr styles={{ color: "darkred" }} />
            </span>
            <div className={styles["recipeContents"]}>
              {currRecipe?.quantities.map((amount, index) => {
                return (
                  <div className={styles["checkboxContainer"]}>
                    <input
                      type="checkbox"
                      style={{ backgroundColor: "#6d04ad" }}
                      className={styles["ingredCheckbox"]}
                    />{" "}
                    <div className={styles["checkboxText"]}>
                      {" "}
                      {amount} {ingredArray[index]}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles["instructions"]}>
              <p>{currRecipe?.instructions1}</p>
              <p>{currRecipe?.instructions2}</p>
              <p>{currRecipe?.instructions3}</p>
              <p>{currRecipe?.instructions4}</p>
              <p style={{ color: "white" }}>{currRecipe?.instructions5}</p>
            </div>
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const BookCover = styled.div`
  background-image: url("https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");

  background-size: cover;
  width: 150px;
  height: 250px;
  border-radius: 8px;
  display: none;
`;
