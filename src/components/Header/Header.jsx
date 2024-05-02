import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={css.header}>
      <NavBar />
      <Link to={"/"} className="route_link">
        {" "}
        <img
          className={css.logo}
          src={logo}
          alt="Kanban Kingdom - Malmö Marvels"
        />
        {/* <h1 className={css.h1}>KANBAN KINGDOM</h1> */}
      </Link>
      <UserSelector />
    </header>
  );
};

export default Header;
