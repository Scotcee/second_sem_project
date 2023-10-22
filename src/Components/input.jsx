import React, { useState } from "react";
import styles from "../App.module.css";

function Input(props) {
  const [inputValue, setInputValue] = useState(props.count);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.input}>
      <label htmlFor="myInput"></label>
      <input
        type="text"
        id="myInput"
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px 10px",
          marginLeft: "0px",
          fontSize: "40px"
        }}
        value={props.count}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
