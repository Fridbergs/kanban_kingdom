import React from "react";
import Column from "./Column"; // assuming the file is named Column.js

const Board = ({ columns, board }) => {
  return (
    <main className="board">
      {/* en till form som lägger till kolumner */}
      {/* <h1>{board.title}</h1> */}
      {columns.map((column) => (
        <Column key={column.id} stories={column.stories} column={column} />
      ))}
    </main>
  );
};

export default Board;
