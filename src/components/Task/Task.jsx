import React from "react";
import css from "./Task.module.css";

const Task = ({ task, handleOpenModal, boardId, columnId, storyId }) => {
  const ids = { boardId, columnId, storyId };

  const handleClick = () => {
    // Pass the task ID to the handleOpenModal function
    handleOpenModal(task.id, task, ids); 
  };

  return (
    <>
      <div onClick={handleClick} className={css.task}>
        <div className="taskheader">
          <h5>{task.title}</h5>
          <p style={{ fontSize: "0.6rem", color: "yellow" }}>
            {task.userOwnership.join(", ")}
          </p>
        </div>
        <p style={{ fontSize: "0.8rem" }}>{task.dueDate}</p>
      </div>
    </>
  );
};

export default Task;
