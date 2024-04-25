import { useState } from "react";
import { useDispatch } from "react-redux";
import Column from "../Column/Column"; // assuming the file is named Column.js
import { addColumn } from "../../slices/BoardSlice";
import css from "./Board.module.css";
const Board = ({ board, handleOpenModal }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    const boardId = board.id;
    dispatch(addColumn({ title: input, boardId }));
    setInput("");
  };

  return (
    <main className={css.board}>
      <div className={css.board_header}>
        <h2>{board.title}</h2>
        {/* Form som lägger till kolumner */}
        <form onSubmit={handleAddColumn}>
          <input
            type="text"
            id="columnTitle"
            placeholder="Add a Column..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit"> + </button>
        </form>
      </div>
      <div className={css.column_container}>
        {board.columns.map((column) => (
          <Column
            handleOpenModal={handleOpenModal}
            key={column.id}
            stories={column.stories}
            board={board}
            column={column}
          />
        ))}
      </div>
    </main>
  );
};

export default Board;
