import React from "react";
import css from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={css.task}>
      <h3>{task.title}</h3>
    </div>
  );
};

export default Task;
