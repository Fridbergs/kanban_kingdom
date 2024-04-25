import Task from "../Task/Task";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/BoardSlice";
import css from "./Story.module.css";

const Story = ({ tasks, story, column, board }) => {
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
      <h4>{story.title}</h4>
      <div className={css.task_div}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
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
