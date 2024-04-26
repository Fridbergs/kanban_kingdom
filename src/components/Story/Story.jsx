import Task from "../Task/Task";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/BoardSlice";
import css from "./Story.module.css";

const Story = ({ tasks, story, column, board, handleOpenModal }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const columnId = column.id;
  const boardId = board.id;
  const storyId = story.id;

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ title: input, columnId, boardId, storyId }));
    setInput("");
  };

  return (
    <article className={css.story}>
      {/* en form som lägger till tasks */}
      <h4>{story.title}</h4>
      <div className={css.task_div}>
        {tasks.map((task) => (
          <Task             
            boardId={boardId}
            columnId={columnId}
            storyId={storyId}
            handleOpenModal={handleOpenModal}
            key={task.id}
            task={task} />
        ))}
      </div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          id="taskTitle"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={input.length < 5}>
          +
        </button>
      </form>
    </article>
  );
};

export default Story;
