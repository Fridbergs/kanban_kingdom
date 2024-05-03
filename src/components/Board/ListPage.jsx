import React from "react";
import "./Listview.css";
import Story from "../Story/Story";

const ListPage = ({ board, handleOpenModal }) => {
  const columns = board.columns;
  const stories = columns.flatMap((column) => column.stories); // Flatten stories into one array

  return (
    <div
      className="listview-div"
      style={{
        display: "flex",
        flexGrow: "1",
        maxHeight: "100%",
        marginTop: "3rem",
      }}
    >
      <h2>List View</h2>
      {stories.map((story) => (
        <Story
          key={story.id}
          tasks={story.tasks}
          story={story}
          columns={columns}
          board={board}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
};

export default ListPage;
