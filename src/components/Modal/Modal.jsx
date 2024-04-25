import css from "./Modal.module.css";

const Modal = ({ task, onClose }) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  /*
TODO:
reducers för edit, delete, moveTask

Modalens innehåll:
labels for users
dueDate
Deadline


*/
  return (
    <div className={css["modal-overlay"]} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div className={css["modal-header"]}>
          <button onClick={onClose}>x</button>
          <h2>{task.title}</h2>
        </div>
        <div className={css["modal-content"]}>
          <p className={css["modal-date"]}>{/* Display the date */}</p>
          <p>{task.content}</p>
          <p>{/* Display other task details as needed */}</p>
        </div>
        <div className={css["modal-footer"]}>
          <button className={css["delete-task"]}>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
