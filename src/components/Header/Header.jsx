import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/blau.png";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to={"/"} className="route_link">
        {" "}
        <img
          style={{ height: "2.5rem", marginLeft: "1rem" }}
          src={logo}
          alt="kanban kingdom logo"
        />
      </Link>

      <NavBar />
      <UserSelector />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
