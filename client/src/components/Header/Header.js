import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles["header__container"]}>
        <div>Log-in/Sign-up</div>
        <div>Goldy's Pantry</div>
        <div>Select Book Dropdown</div>
      </div>
    </>
  );
}

export default Header;
