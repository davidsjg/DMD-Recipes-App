import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./HomeHero.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";
import Autocomplete from "../Autocomplete/Autocomplete";

function HomeHero() {
  const [ingredient, setIngredient] = useState(true);
  const [book, setBook] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const [course, setCourse] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const [searchParam, setSearchParam] = useState("ingredient");
  const [allRecipes, setAllRecipes] = useState([]);

  const recipeState = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let ingredInput = useRef();
  let recipeSearch = useRef();

  let searchClass;
  let searchType = ["ingredient", "book", "recipe", "course"];

  let tempBooks = [];
  let tempData;
  let recipeTitles = [];
  let newArray = [];
  let bookTitles;

  useEffect(() => {
    API.getTitles().then((data) => {
      //all book titles, including allBooks at index 0

      tempData = data.data;
      bookTitles = data.data;

      tempData.map((name) => {
        recipeTitles.push(name.name);
      });

      //recipe titles mapped into new array with 2 key value pairs for
      recipeTitles.map((title, index) => {
        //recipe titles mapped into new array with 2 key value pairs for, send to Autocomplete
        newArray.push({ id: title, label: title });
        setAllRecipes(newArray);
      });
    });
  }, []);

  const handleClick = (e) => {
    console.log(e.target.value);
    let temp = e.target.id;
    setSearchParam(temp);

    changeRoutes(e.target.id);
  };

  const handleClick2 = (e) => {
    console.log(recipeSearch.current.state.value);
  };

  const changeRoutes = (param) => {
    console.log(searchParam);
    switch (param) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(searchParam);

    switch (searchParam) {
      case "ingredient":
        console.log("inside ingred");
        API.singleQuery(searchInput, "ingred").then((data) => {
          console.log(data.data);
          // dispatch({ type: "recipe/recipeSelected", payload: data.data });
          navigate(`/chooseRecipe/${searchInput}`);
        });
        dispatch({ type: "" });
        break;
      case "course":
        API.singleQuery(searchInput, "course").then((data) => {
          console.log(data.data);
          // dispatch({ type: "recipe/recipeSelected", payload: data.data });
          navigate(`/chooseRecipe/${searchInput}`);
        });
        break;
      case "recipe":
        API.singleQuery(recipeSearch.current.state.value, "recipe").then(
          (data) => {
            console.log(data.data);
            // dispatch({ type: "recipe/recipeSelected", payload: data.data });
            navigate(`/recipe/${recipeSearch.current.state.value}`);
          }
        );
        break;
      case "book":
        API.singleQuery(searchInput, "book").then((data) => {
          console.log(data.data);
          dispatch({ type: "recipe/recipeSelected", payload: data.data });
          navigate(`/chooseRecipe/${searchInput}`);
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
                course === true
                  ? styles.buttonSelected
                  : styles.homeHero__Button,
                ,
              ].join(" ")}
              onClick={handleClick}
              id="course"
            >
              Search Course
            </div>

            <div
              className={[
                recipe === true
                  ? styles.buttonSelected
                  : styles.homeHero__Button,
                ,
              ].join(" ")}
              onClick={handleClick}
              id="recipe"
            >
              Search Recipe
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
              <div
                className={[
                  styles.homeHero__searchbar,
                  styles.ingredInput,
                ].join(" ")}
              >
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
              {/* <span className={styles["recipeSearch"]}> */}

              <div className={styles["homeHero__searchbar"]}>
                <i class="fas fa-search fa-lg"></i>

                <Autocomplete
                  className={styles["homeHero__searchInput"]}
                  recipeTitles={allRecipes}
                  ref={recipeSearch}
                />
                <button
                  type="submit"
                  className={styles["homeHero__submitButton"]}
                >
                  Submit
                </button>
              </div>
              {/* </span> */}
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
