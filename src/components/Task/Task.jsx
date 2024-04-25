import React from "react";
import css from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={css.task}>
      <h5>{task.title}</h5>
    </div>
  );
};

export default Task;
