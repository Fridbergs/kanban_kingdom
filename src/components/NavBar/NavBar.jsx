import { NavLink, Link } from "react-router-dom";
import css from "./NavBar.module.css";
import logo from "../../assets/images/spiderking.png";

const NavBar = () => {
  return (
    <nav>
      <ul className={css.nav_list}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Info
          </NavLink>
        </li>

        <Link to={"/"} className="route_link">
          {" "}
          <img
            className={css.logo}
            src={logo}
            alt="Kanban Kingdom - Malmö Marvels"
          />
        </Link>

        <li>
          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
