import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, setBoards } from "./slices/BoardSlice"; // Import clearBoards action
import { nanoid } from "@reduxjs/toolkit";

function App() {
  // localStorage.clear();

  const [activeBoardId, setActiveBoardId] = useState(""); // Store the ID of the active board
  const [modalTask, setModalTask] = useState(null); // Store the task data for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIds, setModalIds] = useState({
    boardId: "",
    columnId: "",
    storyId: "",
  });
  const [input, setInput] = useState(""); // Input value for new board title

  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve data from localStorage
    const storedBoards =
      JSON.parse(localStorage.getItem("boards"))?.boards || [];

    // Check if any boards are stored in local storage
    if (Array.isArray(storedBoards) && storedBoards.length > 0) {
      // Update Redux state with the boards from local storage
      dispatch(setBoards(storedBoards));
    }
  }, [dispatch]);

  const handleOpenModal = (taskId, taskData, ids) => {
    setModalTask(taskData);
    setModalIds(ids); // Here, `ids` should be an object containing actual IDs
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalTask(null); // Reset the task ID for the modal
  };

  const handleActiveBoard = (id) => {
    setActiveBoardId(id); // Set the ID of the active board
  };

  const handleAddBoard = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty board titles
    dispatch(addBoard(input));
    setInput(""); // Reset input field
  };

  // Get boards from Redux state
  const boards = useSelector((state) => state.boards);

  return (
    <>
      <Header />
      <div className="container">
        {isModalOpen && (
          <Modal task={modalTask} onClose={handleCloseModal} ids={modalIds} />
        )}
        {/* Render boards from localStorage */}
        <aside className="board_menu">
          <p>» Boards</p>
          <ul>
            {boards.map((board) => (
              <li onClick={() => handleActiveBoard(board.id)} key={board.id}>
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
