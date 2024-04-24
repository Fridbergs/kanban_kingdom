import React from "react";
import NavBar from "./NavBar";
import UserSelector from "./UserSelector";

const Header = () => {
  return (
    <header>
      <UserSelector />
      KANBAN KINGDOM
      <NavBar />
    </header>
    // Subkomponenter skall byggas, nav, login dropdown
  );
};

export default Header;
