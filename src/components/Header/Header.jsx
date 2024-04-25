import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>KANBAN KINGDOM</h1>
      <NavBar />
      <UserSelector />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
