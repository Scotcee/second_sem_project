import React, { useState } from "react";
import styles from "../App.module.css";

import Input from "./input";
import useCounter from "../hooks/useCounter";

function Card() {
  const counter = useCounter(0);
  const [customValue, setCustomValue] = useState(0);
  const [valueInputVisible, setValueInputVisible] = useState(false);

  const handleValueChange = (event) => {
    setCustomValue(parseInt(event.target.value, 10));
  };

  const handleSetValue = () => {
    counter.setValue(customValue);
    setValueInputVisible(false);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.increament}>
            <button onClick={counter.increment}>Increment</button>
          </div>
          <div className={styles.decreament}>
            <button onClick={counter.decrement}>Decrement</button>
          </div>
          <div className={styles.reset}>
            <button onClick={counter.reset}>Reset</button>
          </div>
          <div className={styles.setvalue}>
            {valueInputVisible ? (
              <>
                <input
                  className={styles.input}
                  type="number"
                  value={customValue}
                  onChange={handleValueChange}
                />
                <button onClick={handleSetValue}>Set Value</button>
              </>
            ) : (
              <button onClick={() => setValueInputVisible(true)}>
                Set Value
              </button>
            )}
          </div>
        </div>
      </div>
      <Input count={counter.count} />
    </>
  );
}

export default Card;
