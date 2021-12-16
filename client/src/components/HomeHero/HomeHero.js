import React from "react";
import styles from "./HomeHero.module.css";
import { useSelector } from "react-redux";

function HomeHero() {
  const recipeState = useSelector((state) => state.recipe);

  console.log(recipeState);

  return (
    <>
      <div className={styles["homeHero__mainContain"]}>
        <div className={styles["homeHero__findRecipe"]}>Search the Pantry</div>
        <div className="homeHero__searchbar">
          <i class="fas fa-search fa-lg"></i>
          <input type="text" className={styles["header__searchInput"]} />
        </div>
        <div className={styles["homeHero__submitButton"]}>Search</div>
      </div>
    </>
  );
}

export default HomeHero;
