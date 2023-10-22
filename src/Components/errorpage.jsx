import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NotFoundImage from "../404image.jpeg";
import styles from "../App.module.css";

function ErrorPage() {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className={styles["error-container"]}>
      <img src={NotFoundImage} alt="error" className={styles["error-image"]} />
      <div>
        <p className={styles["error-message"]}>
          Page not found. Click on the button to restart the app.
        </p>

        <button onClick={handleRestart} className={styles["error-button"]}>
          Restart App
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
