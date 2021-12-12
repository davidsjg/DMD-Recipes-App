import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles["header__container"]}>
        <div className={styles["header__left"]}>
          <div className={styles["header__customMenu"]}>
            <i class="fas fa-bars"></i>
          </div>
          <div>
            <span>Log-In/</span>
            <span>Sign-up</span>
          </div>
        </div>
        <div>Goldy's Pantry</div>
        <div className={styles["header__right"]}>Select Book Dropdown</div>
      </div>
    </>
  );
}

export default Header;
