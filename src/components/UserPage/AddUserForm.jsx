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

  // Handle add user 
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Default photo URL if input left empty
    const photoUrl = formData.photo.trim() ? formData.photo.trim() : "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS8piVHY8Mf7p62OkwcgqmZjlWI8WS58uafqox6EPKAt6OE8IWu3Aow6W-iQHJJLJ09&psig=AOvVaw15qI_ar6UncVw1kTfSZIFW&ust=1714821092086000&source=images&cd=vfe&opi=89978449&ved=0CAoQjRxqFwoTCMiKqMOs8YUDFQAAAAAdAAAAABAE";

    dispatch(addUser({ name: formData.name, photo: photoUrl }));
    setFormData({ name: "", photo: "" });
  };

  return (
    <form className={css.form} onSubmit={handleAddUser}>
      <input
        type="text"
        id="name"
        className={css.input}
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <input
        type="text"
        id="photo"
        className={css.input}
        placeholder="Photo URL (optional)"
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
