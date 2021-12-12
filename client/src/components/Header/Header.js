import React, { useState } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrop from "../NavDrop/NavDrop";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const burgerTrue = burgerStatus
    ? styles.burgerNavTrue
    : styles.burgerNavFalse;
  return (
    <>
      <div className={styles["header__container"]}>
        <div className={styles["header__left"]}>
          {/* className = burgerNavTrue or burgerNavFalse */}
          <div className={`${burgerTrue}`}>
            <div className={styles["closeWrapper"]}>
              <div
                className={styles["customClose"]}
                onClick={() => setBurgerStatus(false)}
              >
                <i class="far fa-window-close"></i>
              </div>
            </div>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
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
          <NavDrop />
        </div>
      </div>
    </>
  );
}

export default Header;

// className={index === current ? "slide active" : "slide"}
