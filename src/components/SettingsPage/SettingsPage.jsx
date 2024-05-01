import React from "react";
import css from "./SettingsPage.module.css";

const SettingsPage = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
        {asideIsCollapsed ? ">" : "<"}
      </button>
      <main className={css.settings_container}>SettingsPage</main>
    </>
  );
};

export default SettingsPage;
