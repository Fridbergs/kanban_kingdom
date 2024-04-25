import React, { useState } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBoard } from "./slices/BoardSlice";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const [activeBoardId, setActiveBoardId] = useState(""); // Store the ID of the active board
  const [modalTask, setModalTask] = useState(null); // Store the task data for the modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (taskId, taskData) => {
    setModalTask(taskData); // Set the task data for the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalTask(null); // Reset the task ID for the modal
  };

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
        {isModalOpen && <Modal task={modalTask} onClose={handleCloseModal} />}
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
            <button type="submit"> + </button>
          </form>
        </aside>
        {/* Render the active board */}
        {activeBoardId && (
          <div className="active_board">
            <Board
              board={boards.find((board) => board.id === activeBoardId)}
              handleOpenModal={handleOpenModal}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
