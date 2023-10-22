import React from "react";
import styles from "../App.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Counter App</h1>
      <p>This is a simple counter app</p>
    </div>
  );
}

export default Header;
