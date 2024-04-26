import React from "react";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

const UserPage = () => {
  const users = useSelector((state) => state.users);

  return (
    <main
      style={{
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "1rem",
        width: "100%",
        maxWidth: "1000px",
      }}
    >
      <UserList users={users} />
      <div className="form-div">
        <p style={{ marginBottom: "0.5rem" }}>Add User</p>
        <AddUserForm />
      </div>
    </main>
  );
};

export default UserPage;
