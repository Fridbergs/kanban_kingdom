import React from "react";

const NavBar = () => {
  //göra till Links med sidor (efter routing är på plats)
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>info</li>
        <li>settings</li>
        <li>user-profile</li>
      </ul>
    </nav>
  );
};

export default NavBar;
