import { useState } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBoard } from "./slices/BoardSlice";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const [activeBoardId, setActiveBoardId] = useState(""); // Store the ID of the active board

  //Addera board.
  const boards = useSelector((state) => state.boards);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddBoard = (e) => {
    e.preventDefault();

    dispatch(addBoard(input));
    setInput("");
  };
  const handleActiveBoard = (id) => {
    setActiveBoardId(id); // Set the ID of the active board
  };
  return (
    <>
      <Header />
      <div className="container">
        {/* Aside som komponent, subkomponent renderar ut boards som knappar */}
        <aside className="board_menu">
          {boards.length > 0 ? <p>» Boards</p> : undefined}
          <ul>
            {boards.map((board) => (
              <li onClick={() => handleActiveBoard(board.id)} key={board.id}>
                {" "}
                {board.title}
                <span className="board_list_buttons">×</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddBoard}>
            <input
              type="text"
              id="boardTitle"
              placeholder="Add a board..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={input.length < 5}>
              {" "}
              +{" "}
            </button>
          </form>
        </aside>
        {/* Render the active board */}
        {activeBoardId && (
          <div className="active_board">
            <Board board={boards.find((board) => board.id === activeBoardId)} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
