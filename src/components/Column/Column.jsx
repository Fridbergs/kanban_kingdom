import Story from "../Story/Story";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStory } from "../../slices/BoardSlice";
import css from "./Column.module.css";

const Column = ({ stories, column, board }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddStory = (e) => {
    e.preventDefault();
    console.log(column.id);
    const columnId = column.id;
    const boardId = board.id;

    dispatch(addStory({ title: input, columnId, boardId }));
    setInput("");
  };

  return (
    <section className={css.column}>
      {/* En form som lägger till stories */}
      <h2 className={css.column_title}>{column.title}</h2>
      <form onSubmit={handleAddStory}>
        <label htmlFor="storyTitle">Add Story</label>
        <input
          type="text"
          id="storyTitle"
          placeholder="Add a Story..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add story</button>
      </form>
      {stories.map((story) => (
        <Story
          key={story.id}
          tasks={story.tasks}
          story={story}
          column={column}
          board={board}
        />
      ))}
    </section>
  );
};

export default Column;
