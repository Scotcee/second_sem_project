import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    try {
      throw new Error("This is a test error.");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click to Throw Error</button>
    </div>
  );
};

export default ErrorButton;
