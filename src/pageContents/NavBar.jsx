import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

const NavBar = ({ routeInfo }) => {
  console.log(routeInfo[1][1]);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h2>NavBar</h2>
      <div className="navbar-items">
        {/* {routeInfo.forEach(each => (
          <NavLink to={each[0]}>{each[1]}</NavLink>
        ))} */}
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
      <div className="route-path">
        {routeInfo.forEach(each => (
          <Route
            exact
            path={`${each[0]}`}
            render={props => {
              console.log("/", each);
            }}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
