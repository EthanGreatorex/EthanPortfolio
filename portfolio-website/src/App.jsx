import { useEffect, useState } from "react";
import "./css/global.css";
import NavBar from "./components/NavBar.jsx";
import MainContent from "./components/MainContent.jsx";
import React from "react";

function App() {
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <NavBar theme={theme} onThemeToggle={toggleTheme}></NavBar>
      <MainContent></MainContent>
    </>
  );
}

export default App;
