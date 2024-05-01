import React from "react";

const InfoPage = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
        {asideIsCollapsed ? ">" : "<"}
      </button>
      <main>Info Page</main>
    </>
  );
};

export default InfoPage;
