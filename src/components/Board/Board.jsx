import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "../Column/Column";
import { addColumn, editBoardName } from "../../slices/BoardSlice";
import css from "./Board.module.css";
import { useParams } from "react-router-dom";

const Board = ({ handleOpenModal, toggleCollapse, asideIsCollapsed }) => {
  const { boardId } = useParams();
  const boards = useSelector((state) => state.boards);

  // Find the board using the parsed boardId as a string
  const board = boards.find((board) => board.id === boardId);

  const [input, setInput] = useState("");
  // const [newBoardName, setNewBoardName] = useState(board.title);
  const [isEditingBoardName, setIsEditingBoardName] = useState(false);
  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title: input, boardId: board.id }));
    setInput("");
  };

  function handleBoardNameChange(e) {
    dispatch(editBoardName({ boardName: e.target.value, boardId: board.id }));
  }

  if (!board) {
    // Handle case when board is not found
    return <div style={{ padding: "10px 20px 20px 20px" }}>Loading...</div>;
  }

  return (
    <main className={css.board}>
      <div className={css.board_header}>
        <div className={css.left_side}>
          <button
            className="collapse_button no_margin"
            onClick={toggleCollapse}>
            {asideIsCollapsed ? ">" : "<"}
          </button>
          {isEditingBoardName ? (
            <input
              type="text"
              className={css.boardname_edit_input}
              onChange={handleBoardNameChange}
              onKeyDown={(e) =>
                e.key === "Enter" && setIsEditingBoardName(false)
              }
              value={board.title}
            />
          ) : (
            <h2 onClick={() => setIsEditingBoardName(true)}>{board.title}</h2>
          )}
        </div>
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
