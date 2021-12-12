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
    </div>
  );
}

export default HomeHero;

// const Container = styled.main`
//   min-height: calc(100vh - 70px);
//   padding: 0 calc(3.5vw + 5px);
//   position: relative;
//   overflow-x: hidden;

//   &:before {
// background: url("/images/home-background.png") center center / cover
//   no-repeat fixed;
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: -1;
//   }
// `;
