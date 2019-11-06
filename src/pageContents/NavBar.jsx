import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h2>NavBar</h2>
      <div className="navbar-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AboutMe">About Me</NavLink>
        <NavLink to="/GithubCards">Github Usercards</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
