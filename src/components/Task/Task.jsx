import React from "react";
import css from "./Task.module.css";

const Task = ({ task, handleOpenModal, boardId, columnId, storyId }) => {
  const ids = { boardId, columnId, storyId };

  const handleClick = () => {
    handleOpenModal(task.id, task, ids); // Pass the task ID to the handleOpenModal function
  };

  return (
    <>
      <div onClick={handleClick} className={css.task}>
        <div className="taskheader">
          <h3>{task.title}</h3>
          <p style={{ fontSize: "0.6rem", color: "black" }}>
            {task.userOwnership.join(", ")}
          </p>
        </div>
        <p style={{ fontSize: "0.8rem" }}>{task.dueDate}</p>
      </div>
    </>
  );
};

export default Task;
