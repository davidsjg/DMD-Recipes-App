import React, { useState } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrop from "../NavDrop/NavDrop";
import NavDrop2 from "../NavDrop2/NavDrop2";
import { Link } from "react-router-dom";

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
            <i
              class="fas fa-bars"
              style={{ color: "#6d04ad" }}
              onClick={() => setBurgerStatus(true)}
            />
          </aside>
          <aside className={styles["logIn"]}>
            <span>Log-In/</span>
            <span>Sign-up</span>
          </aside>
        </div>
        <Link to="/">
          <div className={styles["header__center"]}>
            <img src="/images/goldysLogo.png" alt="" />
          </div>
        </Link>
        <div className={styles["header__right"]}>
          <NavDrop2 />
        </div>
      </div>
    </>
  );
}

export default Header;

// className={index === current ? "slide active" : "slide"}
