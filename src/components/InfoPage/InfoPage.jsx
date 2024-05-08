import React from "react";
import css from "./InfoPage.module.css";
import Crown from "../Board/Crown";
import Crown2 from "../Board/Crown2";

const InfoPage = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
      {asideIsCollapsed ? <Crown /> : <Crown2 />}
      </button>
      <main className={css.info_container}>Info Page</main>
    </>
  );
};

export default InfoPage;
