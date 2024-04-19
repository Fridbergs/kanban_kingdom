import {useState} from "react";
import {useDispatch} from "react-redux";
import Column from "./Column"; // assuming the file is named Column.js
import {addColumn} from "../slices/BoardSlice";
const Board = ({ board }) => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    console.log(board.id)
    const boardId = board.id;
    
    dispatch(addColumn({title: input, boardId}));
    setInput("");
    };

  return (
    <main className="board">
      <div className="board-header">
      <h1>{board.title}</h1>

      {/* en till form som lägger till kolumner */}
      <form onSubmit={handleAddColumn}>
          <label htmlFor="columnTitle">Add Title</label>
          <input
            type="text"
            id="columnTitle"
            placeholder="Add a Column..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add column</button>
        </form>
      </div>
      <div className="column-container">
      {board.columns.map((column) => (
        <Column key={column.id} stories={column.stories} board={board} column={column} />
      ))}
      </div>
    </main>
  );
};

export default Board;
