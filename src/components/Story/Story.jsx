import Task from "../Task/Task";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/BoardSlice";
import { useDrag } from "react-dnd";
import css from "./Story.module.css";

const Story = ({ tasks, story, column, board, handleOpenModal, columns }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  let columnId = null;

  //undersöker om det är Column.jsx som renderar ut Story (med column som prop)
  if (column) {
    // hittar isf column.id
    columnId = column.id;
  } else {
    // annars renderas den ut från ListviewPage.jsx och hittar id genom column-arrayn
    const storyId = story.id;
    let foundColumnId = null;
    //letar gneom alla columns
    columns.forEach((column) => {
      //om storyn hittas i en column === columnId
      if (column.stories.find((s) => s.id === storyId)) {
        foundColumnId = column.id; // Set the foundColumnId
      }
    });
    columnId = foundColumnId;
  }

  const boardId = board.id;
  const storyId = story.id;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "story",
    item: { id: story.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));


  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ title: input, columnId, boardId, storyId }));
    setInput("");
  };

  return (

    <article className={css.story} ref={drag} >
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
            task={task}
          />
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