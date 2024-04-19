import {useState} from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./css/draft-style.css";
import {useSelector, useDispatch} from "react-redux";
import {addBoard} from "./slices/BoardSlice";
import {nanoid} from "@reduxjs/toolkit";

function App() {
  //Addera board.
  const boards = useSelector((state) => state.boards);
  console.log(boards);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddBoard = (e) => {
    e.preventDefault();

    dispatch(addBoard(input));
    setInput("");
    console.log(boards);
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
        </aside>
        {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </>
  );
}

export default App;
