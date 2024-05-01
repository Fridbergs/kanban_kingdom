import React from "react";
import css from "./UserPage.module.css";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

const UserPage = () => {
  const users = useSelector((state) => state.users);

  return (
    <main className={css.main}>
      <UserList users={users} />
      <div className="form-div">
        <p classname={css.p}>Add User</p>
        <AddUserForm />
      </div>
    </main>
  );
};

export default UserPage;
