// AddUserForm.js
import React, { useState } from "react";
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
    <form
      style={{
        backgroundColor: "#202020ec",
        padding: "20px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleAddUser}
    >
      <label htmlFor="name" style={{ color: "white", marginRight: "10px" }}>
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
        style={{ color: "white", marginRight: "10px", marginTop: "10px" }}
      >
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
      <button
        type="submit"
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "8px",
          color: "black",
          padding: "0.5rem",
        }}
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
