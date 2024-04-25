import Task from "../Task/Task";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/BoardSlice";
import css from "./Story.module.css";

const Story = ({ tasks, story, column, board, handleOpenModal }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    const columnId = column.id;
    const boardId = board.id;
    const storyId = story.id;
    dispatch(addTask({ title: input, columnId, boardId, storyId }));
    setInput("");
  };

  return (
    <article className={css.story}>
      {/* en form som lägger till tasks */}
      <h2>{story.title}</h2>
      <form onSubmit={handleAddTask}>
        <label htmlFor="taskTitle">Add task</label>
        <input
          type="text"
          id="taskTitle"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
      <div className={css.task_div}>
        {tasks.map((task) => (
          <Task handleOpenModal={handleOpenModal} key={task.id} task={task} />
        ))}
      </div>
    </article>
  );
};

export default Story;
