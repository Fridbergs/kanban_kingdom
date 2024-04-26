import { useDispatch } from "react-redux";
import { removeUser } from "../../slices/UserSlice";

const UserList = ({ users }) => {
  const dispatch = useDispatch();

  const handleRemoveUser = (userId) => {
    // Dispatch the removeUser action with the userId
    dispatch(removeUser(userId));
  };

  return (
    <>
      <ul style={{ width: "70%" }}>
        <p>User List</p>
        {users.map((user) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#202020ec",
              marginTop: "0.5rem",
            }}
            key={user.id}
          >
            <img
              style={{ height: "3rem", borderRadius: "50%" }}
              src={user.profilePhoto}
              alt={user.name}
            />{" "}
            <p>{user.name}</p>
            <p>{user.dateJoined}</p>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "8px",
                color: "black",
                padding: "0.5rem",
              }}
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
