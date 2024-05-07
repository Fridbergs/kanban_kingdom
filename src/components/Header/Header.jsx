import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/spiderking.png";

const Header = () => {
  const selectedUser = useSelector(
    (state) => state.users.find((user) => user.selectedUser)
    // showing the user that is the selected user
  );

  return (
    <header className={css.header}>
      {/* <p className="bangers">hej1</p> */}
      <NavBar />
      <Link to={"/"} className="route_link">
        {" "}
        <img
          className={css.logo}
          src={logo}
          alt="Kanban Kingdom - Malmö Marvels"
        />
      </Link>
      <p>Logged in as: {}</p>
      <UserSelector />
    </header>
  );
};

export default Header;
