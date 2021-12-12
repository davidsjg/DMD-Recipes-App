import React, { useState } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(true);

  const burgerTrue = burgerStatus
    ? styles.burgerNavTrue
    : styles.burgerNavFalse;
  return (
    <>
      <div className={styles["header__container"]}>
        <div className={styles["header__left"]}>
          <div className={`${burgerTrue}`}>
            <div className={styles["closeWrapper"]}>
              <div className={styles["customClose"]}>
                <i class="far fa-window-close"></i>
              </div>
            </div>
          </div>
          <aside className={styles["header__customMenu"]}>
            <i class="fas fa-bars" onClick={() => setBurgerStatus(true)} />
          </aside>
          <aside>
            <span>Log-In/</span>
            <span>Sign-up</span>
          </aside>
        </div>
        <div className={styles["header__center"]}>
          <img src="/images/goldysLogo.png" alt="" />
        </div>
        <div className={styles["header__right"]}>
          <aside> Select Book Dropdown</aside>
        </div>
      </div>
    </>
  );
}

export default Header;

// className={index === current ? "slide active" : "slide"}
