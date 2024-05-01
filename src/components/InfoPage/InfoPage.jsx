import React from "react";
import css from "./InfoPage.module.css";

const InfoPage = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
        {asideIsCollapsed ? ">" : "<"}
      </button>
      <main className={css.info_container}>Info Page</main>
    </>
  );
};

export default InfoPage;
