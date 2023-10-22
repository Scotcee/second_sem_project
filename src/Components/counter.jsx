import React from "react";

// this is the whole counter

function Counter(props) {
  return <div className="{styles.counter-container}">{props.children}</div>;
}

export default Counter;
