import React, { useRef, useState } from "react";
import styles from "./HomeHero.module.css";
import { useSelector } from "react-redux";

function HomeHero() {
  const [ingred, setIngred] = useState(true);
  const [book, setBook] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const [course, setCourse] = useState(false);

  let searchClass;

  const recipeState = useSelector((state) => state.recipe);

  let searchTitles = ["Ingredient", "Book", "Recipe", "Course"];

  const handleClick = (e) => {
    const searchParam = e.target.id;

    switch (searchParam) {
      case "Ingredient":
        setIngred(true);
        setBook(false);
        setRecipe(false);
        setCourse(false);
        console.log(searchClass);
        break;
      case "Book":
        setIngred(false);
        setBook(true);
        setRecipe(false);
        setCourse(false);
        break;
      case "Recipe":
        setIngred(false);
        setBook(false);
        setRecipe(true);
        setCourse(false);
        break;
      case "Course":
        setIngred(false);
        setBook(false);
        setRecipe(false);
        setCourse(true);
        break;

      default:
        break;
    }

    if (searchParam === "Ingredient") {
      setIngred(true);
    } else if (searchParam === "Book") {
      setIngred(false);
      setBook(true);
    }
  };

  return (
    <>
      <div className={styles["homeHero__mainContain"]}>
        <div className={styles["homeHero__ButtonsDisp"]}>
          {searchTitles.map((title) => {
            return (
              <div
                className={styles["homeHero__Button"]}
                onClick={handleClick}
                id={title}
              >
                Search {title}
              </div>
            );
          })}
        </div>

        {ingred === true ? (
          <div>
            <div className="homeHero__searchbar">
              <i class="fas fa-search fa-lg"></i>
              <input
                type="text"
                placeholder="Enter Ingredient"
                className={styles["homeHero__searchInput"]}
              />
            </div>
          </div>
        ) : book === true ? (
          <div>
            <div className="homeHero__searchbar">
              <i class="fas fa-search fa-lg"></i>
              <input
                type="text"
                placeholder="Enter Book"
                className={styles["homeHero__searchInput"]}
              />
            </div>
          </div>
        ) : recipe === true ? (
          <div>
            <div className="homeHero__searchbar">
              <i class="fas fa-search fa-lg"></i>
              <input
                type="text"
                placeholder="Enter Recipe"
                className={styles["homeHero__searchInput"]}
              />
            </div>
          </div>
        ) : course ? (
          <div>
            <div className="homeHero__searchbar">
              <i class="fas fa-search fa-lg"></i>
              <input
                type="text"
                placeholder="Enter Course"
                className={styles["homeHero__searchInput"]}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="homeHero__searchbar">
              <i class="fas fa-search fa-lg"></i>
              <input
                type="text"
                placeholder=""
                className={styles["homeHero__searchInput"]}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeHero;

{
  /* <div className={styles["homeHero__findRecipe"]}>Search the Pantry</div> */
}
