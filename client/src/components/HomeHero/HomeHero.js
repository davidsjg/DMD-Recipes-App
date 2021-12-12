import React from "react";
import styles from "./HomeHero.module.css";

function HomeHero() {
  return (
    <div className={styles["homeHero__mainContain"]}>
      <p></p>
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
