import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import UserSelector from "../UserSelector/UserSelector";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  // Använd korrekt sökväg baserat på din slice struktur
  const selectedUser = useSelector((state) => state.users.selectedUser);

  return (
    <header className="css.header">
      <Link to={"/"}>
        {" "}
        <h1>KANBAN KINGDOM</h1>
      </Link>
      <p>Inloggad som: {selectedUser || "Välj Användare"}</p>

      <NavBar />
      <UserSelector />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
