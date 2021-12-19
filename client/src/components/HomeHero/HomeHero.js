import React from "react";
import styles from "./HomeHero.module.css";
import { useSelector } from "react-redux";

function HomeHero() {
  const recipeState = useSelector((state) => state.recipe);

  let searchTitles = ["Ingredient", "Book", "Recipe", "Course"];

  const handleClick = () => {};

  return (
    <>
      <div className={styles["homeHero__mainContain"]}>
        <div className={styles["homeHero__ButtonsDisp"]}>
          {searchTitles.map((title) => {
            return (
              <div
                className={styles["homeHero__Button"]}
                onClick={handleClick}
                value={title}
              >
                Search {title}
              </div>
            );
          })}
        </div>

        <div className="homeHero__searchbar">
          <i class="fas fa-search fa-lg"></i>
          <input type="text" className={styles["header__searchInput"]} />
        </div>
      </div>
    </>
  );
}

export default HomeHero;

{
  /* <div className={styles["homeHero__findRecipe"]}>Search the Pantry</div> */
}
