import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "../Column/Column";
import { addColumn } from "../../slices/BoardSlice";
import css from "./Board.module.css";
import { useParams } from "react-router-dom";

const Board = ({ handleOpenModal, toggleCollapse, asideIsCollapsed }) => {
  const { boardId } = useParams();
  const boards = useSelector((state) => state.boards);

  // Find the board using the parsed boardId as a string
  const board = boards.find((board) => board.id === boardId);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title: input, boardId }));
    setInput("");
  };

  if (!board) {
    // Handle case when board is not found
    return <div>Loading...</div>;
  }

  return (
    <main className={css.board}>
      <div className={css.board_header}>
        <h2>{board.title}</h2>
        <form onSubmit={handleAddColumn}>
          <input
            type="text"
            id="columnTitle"
            placeholder="Add a Column..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={input.length < 5}>
            {" "}
            +{" "}
          </button>
        </form>
      </div>
      <div className={css.column_container}>
        <button className="collapse_button" onClick={toggleCollapse}>
          {asideIsCollapsed ? ">" : "<"}
        </button>
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
