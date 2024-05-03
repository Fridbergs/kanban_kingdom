import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const selectedUser = useSelector(
    (state) => state.users.find((user) => user.selectedUser)
    //Stoppar in den användaren som är selected user.
  );

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

      <p>Inloggad som: {selectedUser || "Välj Användare"}</p>

      <NavBar />

      <UserSelector />
    </header>
  );
};

export default Header;
