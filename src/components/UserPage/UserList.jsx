import { useDispatch } from "react-redux";
import { removeUser } from "../../slices/UserSlice";
import css from "./UserList.module.css";

const UserList = ({ users }) => {
  const dispatch = useDispatch();

  const handleRemoveUser = (userId) => {
    // Dispatch the removeUser action with the userId
    dispatch(removeUser(userId));
  };

  return (
    <>
      <ul className={css.ul}>
        <p>User List</p>
        {users.map((user) => (
          <li className={css.li} key={user.id}>
            <img className={css.img} src={user.profilePhoto} alt={user.name} />{" "}
            <p>{user.name}</p>
            <p>{user.dateJoined}</p>
            <button
              className="user_page_button"
              onClick={() => handleRemoveUser(user.id)} // Call handleRemoveUser with userId
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
