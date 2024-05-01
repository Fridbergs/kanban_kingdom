import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to={"/"} className="route_link">
        {" "}
        <h1 className={css.h1}>KANBAN KINGDOM</h1>
      </Link>
      <NavBar />
      <UserSelector />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
