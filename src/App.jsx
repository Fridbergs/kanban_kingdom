import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./css/draft-style.css";
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
        <aside className="board-menu">
          <form onSubmit={handleAddBoard}>
            <label htmlFor="boardTitle">Add Title</label>
            <input
              type="text"
              id="boardTitle"
              placeholder="Add a Board..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add Board</button>
          </form>
          <p>Select Board</p>
          {boards.map((board) => (
            <button
              onClick={() => handleActiveBoard(board.id)}
              style={{ width: "100%", marginTop: "1rem" }}
              key={board.id}
            >
              {" "}
              {board.title}
            </button>
          ))}
        </aside>
        {/* Render the active board */}
        {activeBoardId && (
          <div className="active-board">
            <Board board={boards.find((board) => board.id === activeBoardId)} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
