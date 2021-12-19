import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./HomeHero.module.css";
import { useSelector } from "react-redux";
import API from "../../utils/API";

function HomeHero() {
  const [ingredient, setIngredient] = useState(true);
  const [book, setBook] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const [course, setCourse] = useState(false);
  const [searchInput, setSearchInput] = useState();

  const recipeState = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  let ingredInput = useRef();

  let searchParam = "Ingredient";
  let searchClass;
  let searchTitles = ["Ingredient", "Book", "Recipe", "Course"];

  const handleClick = (e) => {
    console.log(e.target);
    searchParam = e.target.id;

    switch (searchParam) {
      case "ingredient":
        setIngredient(true);
        setBook(false);
        setRecipe(false);
        setCourse(false);
        break;
      case "book":
        setIngredient(false);
        setBook(true);
        setRecipe(false);
        setCourse(false);
        break;
      case "recipe":
        setIngredient(false);
        setBook(false);
        setRecipe(true);
        setCourse(false);
        break;
      case "course":
        setIngredient(false);
        setBook(false);
        setRecipe(false);
        setCourse(true);
        break;

      default:
        break;
    }

    if (searchParam === "Ingredient") {
      setIngredient(true);
    } else if (searchParam === "Book") {
      setIngredient(false);
      setBook(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(searchParam);
    // API.singleQuery(searchInput, "ingred").then((data) => {
    //   console.log(data);
    // });
    switch (searchParam) {
      case "Ingredient":
        console.log("inside ingred");
        API.singleQuery(searchInput, "ingred").then((data) => {
          console.log(data);
        });
        dispatch({ type: "" });
        break;
      case "Book":
        API.singleQuery(searchInput).then((data) => {
          console.log(data);
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={styles["homeHero__mainContain"]}>
        <form
          onSubmit={handleSubmit}
          className={styles["homeHero__subContain"]}
        >
          <div className={styles["homeHero__ButtonsDisp"]}>
            <div
              className={[
                ingredient === true
                  ? styles.buttonSelected
                  : styles.homeHero__Button,
                ,
              ].join(" ")}
              onClick={handleClick}
              id="ingredient"
            >
              Search Ingredient
            </div>
            <div
              className={[
                book === true ? styles.buttonSelected : styles.homeHero__Button,
                ,
              ].join(" ")}
              onClick={handleClick}
              id="book"
            >
              Search Book
            </div>
          </div>

          {ingredient === true ? (
            <>
              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>
                <input
                  type="text"
                  placeholder="Enter Ingredient"
                  className={styles["homeHero__searchInput"]}
                  ref={ingredInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles["homeHero__submitButton"]}
                >
                  Submit
                </button>
              </div>
            </>
          ) : book === true ? (
            <>
              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>
                <input
                  type="text"
                  placeholder="Enter Book"
                  className={styles["homeHero__searchInput"]}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles["homeHero__submitButton"]}
                >
                  Submit
                </button>
              </div>
            </>
          ) : recipe === true ? (
            <>
              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>
                <input
                  type="text"
                  placeholder="Enter Recipe"
                  className={styles["homeHero__searchInput"]}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles["homeHero__submitButton"]}
                >
                  Submit
                </button>
              </div>
            </>
          ) : course === true ? (
            <>
              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>
                <input
                  type="text"
                  placeholder="Enter Course"
                  className={styles["homeHero__searchInput"]}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles["homeHero__submitButton"]}
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>
                <input
                  type="text"
                  placeholder=""
                  className={styles["homeHero__searchInput"]}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className={styles["homeHero__searchButton"]}
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default HomeHero;

{
  /* <div className={styles["homeHero__findRecipe"]}>Search the Pantry</div> */
}
