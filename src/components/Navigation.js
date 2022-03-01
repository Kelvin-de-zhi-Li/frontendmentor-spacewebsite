import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import iconhamburger from "./../assets/shared/icon-hamburger.svg";
import logo from "./../assets/shared/logo.svg";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu((pres) => !pres);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Page logo" />
      </div>

      <nav>
        {!showMenu && (
          <button onClick={toggleMenuHandler}>
            <img src={iconhamburger} alt="open navigation" />
          </button>
        )}

        <ul className={!showMenu ? classes.hide : ""}>
          <button onClick={toggleMenuHandler}>X</button>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/destination?location=moon"
            >
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/crew?member=douglas"
            >
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/technology?technology=launch"
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
