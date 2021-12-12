import React from "react";
import styles from "./HomeHero.module.css";
import Accordion from "../Accordion/Accordion";
import Autocomplete from "../Autocomplete/Autocomplete";

function HomeHero() {
  return (
    <div className={styles["homeHero__mainContain"]}>
      <div className={styles["homeHero__findRecipe"]}>Find a Recipe</div>
      <div className="homeHero__searchbar">
        <i class="fas fa-search fa-lg"></i>
        <input type="text" className={styles["header__searchInput"]} />
      </div>

      <div className={styles["homeHero__submitButton"]}>Search</div>
    </div>
  );
}

export default HomeHero;
