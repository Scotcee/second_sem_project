import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/header";
import ErrorPage from "./Components/errorpage";
import Counter from "./Components/counter";
import Card from "./Components/card";
import ErrorButton from "./Components/testerror";

import styles from "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      {location.pathname === "/" && (
        <div className={styles.container}>
          <Counter>
            <Card />
            <div>
              <ErrorButton />
            </div>
          </Counter>
        </div>
      )}
    </div>
  );
}

export default App;
