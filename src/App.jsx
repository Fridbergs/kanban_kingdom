import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, setBoards } from "./slices/BoardSlice"; // Import clearBoards action
import { nanoid } from "@reduxjs/toolkit";
import Layout from "./components/Layout/Layout";
import css from "./components/Board/Board.module.css";

function App() {
  // localStorage.clear();

  const [modalTask, setModalTask] = useState(null); // Store the task data for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIds, setModalIds] = useState({
    boardId: "",
    columnId: "",
    storyId: "",
  });
  const handleOpenModal = (taskId, taskData, ids) => {
    setModalTask(taskData);
    setModalIds(ids); // Here, `ids` should be an object containing actual IDs
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalTask(null); // Reset the task ID for the modal
  };

  return (
    <>
      <Header />
      {isModalOpen && (
        <Modal task={modalTask} onClose={handleCloseModal} ids={modalIds} />
      )}
      <Layout handleOpenModal={handleOpenModal} />
    </>
  );
}

export default App;
