import css from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { editTask, removeTask } from "../../slices/BoardSlice";
import { useState, useEffect } from "react";
import {
  FaSave,
  FaTrashAlt,
  FaTimes,
  FaClock,
  FaCalendarAlt,
  FaTags,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import Select from "react-select";

/*
   TODO:
   gör en array av categories/labels som visas genom Select
*/

const Modal = ({ task, onClose, ids }) => {
  const { boardId, columnId, storyId } = ids;
  const dispatch = useDispatch();

  // Local states for task properties
  const [title, setTitle] = useState(task.title);
  const [content, setContent] = useState(task.content);
  const [categories, setCategories] = useState(task.categories);
  const [deadLine, setDeadLine] = useState(task.deadLine);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isUrgent, setIsUrgent] = useState(task.isUrgent);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [userOwnership, setUserOwnership] = useState(task.userOwnership);
  const [users, setUsers] = useState([]);

  //vi hämatar users från userSlice - useSelctor
  // spara user.name i en array som blir select (eva fix)
  // Dummy user data
  useEffect(() => {
    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Extract user names
    const userNames = storedUsers.map((user) => ({
      label: user.name,
      value: user.name,
    }));
    // Update the users state
    setUsers(userNames);
  }, []);

  const labels = [
    { label: "Bug", value: "Bug" },
    { label: "Feature", value: "Feature" },
    { label: "Enhancement", value: "Enhancement" },
    { label: "Documentation", value: "Documentation" },
    { label: "Research", value: "Research" },
    { label: "Troubleshooting", value: "Troubleshooting" },
    { label: "Improvement", value: "Improvement" },
    { label: "Customer Request", value: "Customer Request" },
    { label: "PO Request", value: "PO Request" },
    { label: "Styling", value: "Styling" },
    { label: "Functionality", value: "Functionality" },
    { label: "Fuck Ups", value: "Fuck Ups" }, // Assuming this is "Fuck Ups" with a typo
  ];

  const handleUserOwnershipChange = (selectedOptions) => {
    const selectedUsers = selectedOptions.map((option) => option.value);
    setUserOwnership(selectedUsers);
  };

  const handleCategoryChange = (selectedOptions) => {
    const selectedCategories = selectedOptions.map((option) => option.value);
    setCategories(selectedCategories);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    // Update the corresponding local state based on the input name
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      case "category":
        const selectedCategories = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value);
        setCategories(selectedCategories);
        break;
      case "deadLine":
        setDeadLine(value);
        break;
      case "dueDate":
        setDueDate(value);
        break;
      case "isUrgent":
        setIsUrgent(checked);
        break;
      case "isCompleted":
        setIsCompleted(checked);
        break;
      case "userOwnership":
        const selectedUsers = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value);
        setUserOwnership(selectedUsers);
        break;
      default:
        break;
    }
  };

  const handleEditTask = () => {
    // Prepare the updated task object
    const updatedTask = {
      ...task,
      title,
      content,
      categories,
      deadLine,
      dueDate,
      isUrgent,
      isCompleted,
      userOwnership,
    };

    // Dispatch an action to edit the task
    dispatch(
      editTask({
        boardId,
        columnId,
        storyId,
        taskId: task.id,
        editedTask: updatedTask,
      })
    );
    onClose();
  };

  const handleDeleteTask = () => {
    dispatch(removeTask({ boardId, columnId, storyId, taskId: task.id }));
    onClose();
  };

  return (
    <div className={css["modal-overlay"]} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div className={css["modal-header"]}>
          <button onClick={onClose}>
            <FaTimes />
          </button>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div className={css["modal-content"]}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleChange}
            placeholder="Content"
          />
          <label htmlFor="category">
            {" "}
            <FaTags /> Category
          </label>
          <Select
            options={labels}
            isMulti
            value={categories.map((category) => ({
              label: category,
              value: category,
            }))}
            onChange={handleCategoryChange}
          />
          <label htmlFor="deadLine">
            {" "}
            <FaClock /> Deadline
          </label>
          <input
            type="text"
            id="deadLine"
            name="deadLine"
            value={deadLine}
            onChange={handleChange}
            placeholder="Deadline"
          />
          <label htmlFor="dueDate">
            {" "}
            <FaCalendarAlt /> Due Date
          </label>
          <input
            type="text"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={handleChange}
            placeholder="Due Date"
          />
          <label>
            <input
              type="checkbox"
              name="isUrgent"
              checked={isUrgent}
              onChange={handleChange}
            />
            <FaExclamationTriangle /> Urgent
          </label>
          <label>
            <input
              type="checkbox"
              name="isCompleted"
              checked={isCompleted}
              onChange={handleChange}
            />
            <FaCheckCircle /> Completed
          </label>
          <Select
            options={users}
            isMulti
            value={userOwnership.map((user) => ({ label: user, value: user }))}
            onChange={handleUserOwnershipChange}
          />
        </div>
        <div className={css["modal-footer"]}>
          <button className={css["delete-task"]} onClick={handleDeleteTask}>
            <FaTrashAlt />
          </button>
          <button style={{ marginLeft: "1rem" }} onClick={handleEditTask}>
            <FaSave />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
