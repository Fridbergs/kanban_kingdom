import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={css.nav_list}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}>
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}>
            Users
          </NavLink>
        </li>
        {/* Add navlink for listview, create listview page, add route in layout.jsx to listview page */}
      </ul>
    </nav>
  );
};

export default NavBar;
