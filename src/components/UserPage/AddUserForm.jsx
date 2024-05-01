// AddUserForm.js
import React, { useState } from "react";
import css from "./AddUserForm.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/UserSlice";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
  });
  const dispatch = useDispatch();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.photo.trim()) return;

    dispatch(addUser(formData));
    setFormData({ name: "", photo: "" });
  };

  return (
    <form className={css.form} onSubmit={handleAddUser}>
      <label htmlFor="name" className={css.label}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <label
        htmlFor="photo"
        style={{ color: "white", marginRight: "10px", marginTop: "10px" }}>
        Photo URL:
      </label>
      <input
        type="text"
        id="photo"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
      />
      <br />
      <button type="submit" className="user_page_button">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
