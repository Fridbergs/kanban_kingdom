import React from "react";
import css from "./NavBar.module.css";

const NavBar = () => {
  //göra till Links med sidor (efter routing är på plats)
  return (
    <nav>
      <ul className={css.nav_list}>
        <li>info</li>
        <li>settings</li>
        <li>user profile</li>
      </ul>
    </nav>
  );
};

export default NavBar;
