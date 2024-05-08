import React from "react";
import css from "./UserPage.module.css";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import Crown from "../Board/Crown";
import Crown2 from "../Board/Crown2";

const UserPage = ({ toggleCollapse, asideIsCollapsed }) => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <button className="collapse_button" onClick={toggleCollapse}>
      {asideIsCollapsed ? <Crown /> : <Crown2 />}
      </button>
      <main className={css.main}>
        <UserList users={users} />
        <div className={css.form_div}>
          <p className={css.p}>Add User</p>
          <AddUserForm />
        </div>
      </main>
    </>
  );
};

export default UserPage;
