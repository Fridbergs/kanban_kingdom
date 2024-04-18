import React from "react";
import Column from "./Column"; // assuming the file is named Column.js

const Board = ({ board }) => {
  return (
    <main className="board">
      <div className="board-header">
      {/* en till form som lägger till kolumner */}
      <h1>{board.title}</h1>
      </div>
      <div className="column-container">
      {board.columns.map((column) => (
        <Column key={column.id} stories={column.stories} column={column} />
      ))}
      </div>
    </main>
  );
};

export default Board;
