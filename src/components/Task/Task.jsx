import React from "react";
import css from "./Task.module.css";

const Task = ({ task, handleOpenModal }) => {
  const handleClick = () => {
    handleOpenModal(task.id, task); // Pass the task ID to the handleOpenModal function
  };

  return (
    <>
      <div onClick={handleClick} className={css.task}>
        <h3>{task.title}</h3>
      </div>
    </>
  );
};

export default Task;
