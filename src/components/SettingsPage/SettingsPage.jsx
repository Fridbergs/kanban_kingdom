import React from "react";

const SettingsPage = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
        {asideIsCollapsed ? ">" : "<"}
      </button>
      <main>SettingsPage</main>
    </>
  );
};

export default SettingsPage;
