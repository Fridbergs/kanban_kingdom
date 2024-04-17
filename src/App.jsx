import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./css/draft-style.css";
import {useSelector, useDispatch} from "react-redux";
import {addBoard} from "./slices/BoardSlice";

function App() {
   
  //Addera board.
  const boards = useSelector((state) => state.boards);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddBoard = (e) => {
    e.preventDefault();
    
    dispatch(addBoard(input));
    setInput("");
    console.log(boards)
    };

  return (
    <>
      <Header />
      <form action="submit" onSubmit={handleAddBoard}>
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
      {boards.map((board) => {
        <Board title={board.title}/>
      })}
    </>
  );
}

export default App;
