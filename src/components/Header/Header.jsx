import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        {" "}
        <h1>KANBAN KINGDOM</h1>
      </Link>

      <NavBar />
      <UserSelector />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
