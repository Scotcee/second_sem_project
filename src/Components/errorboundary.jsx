import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "./errorpage";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  const handleError = () => {
    setError("An error occurred.");
  };

  if (error) {
    return <ErrorPage />;
  }

  return <>{children(handleError)}</>;
};

export default ErrorBoundary;
