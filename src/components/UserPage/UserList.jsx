import { useDispatch } from "react-redux";
import { removeUser } from "../../slices/UserSlice";
import css from "./UserList.module.css";

const UserList = ({ users }) => {
  const dispatch = useDispatch();

  // Dispatch the removeUser action with the userId
  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <>
      <div className={css.user_list_container}>
        <p>Users</p>
        <ul className={css.ul}>
          {users.map((user) => (
            <li className={css.li} key={user.id}>
              <div className={css.left}>
                <img
                  className={css.img}
                  src={user.profilePhoto}
                  alt={user.name}
                />{" "}
                <p>{user.name}</p>
              </div>
              <div className={css.right}>
                <p>Added {user.dateJoined}</p>
                <button
                  className="user_page_button"
                  onClick={() => handleRemoveUser(user.id)} // Call handleRemoveUser with userId
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
