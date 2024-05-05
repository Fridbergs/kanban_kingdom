import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../slices/UserSlice";

const UserEditModal = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [userData, setUserData] = useState(null);

  // Find the selected user data
  useEffect(() => {
    const selectedUser = users.find((user) => user.id === userId);
    setUserData(selectedUser);
  }, [users, userId]);

  // Handle change of input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Close the modal or reset the selected user ID state
  const handleUpdateUser = () => {
    dispatch(updateUser(userData));
  };
  
  // Return null if user data is not available yet
  if (!userData) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit User</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="photo">Photo URL:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={userData.photo}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdateUser}>Update User</button>
      </div>
    </div>
  );
};

export default UserEditModal;
