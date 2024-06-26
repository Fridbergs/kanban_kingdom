import React from "react";
import css from "./Welcome.module.css";

const Welcome = ({ toggleCollapse, asideIsCollapsed }) => {
  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
        {asideIsCollapsed ? ">" : "<"}
      </button>
      <div className={css.welcome_container}>
        <h1>Welcome to Kanban Kingdom!!</h1>
        <p>This is the landing page of your kanban application.</p>
        <p> ⬅️ Select or create a new Board to start your project!</p>
      </div>
    </>
  );
};

export default Welcome;
