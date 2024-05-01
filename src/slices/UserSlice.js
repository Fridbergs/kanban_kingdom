// UserSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTimeStamp } from "../assets/GlobalAssets";

/* BUG: When removing users, it will not reflect in the UI 
until the user refreshes the page. */

// Function to retrieve users from localStorage
const loadUsersFromLocalStorage = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  return storedUsers;
};

const initialState = loadUsersFromLocalStorage();

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, photo } = action.payload;
      const user = {
        id: nanoid(),
        name: name,
        dateJoined: getTimeStamp(),
        profilePhoto: photo,
      };
      state.push(user);
      localStorage.setItem("users", JSON.stringify(state));
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      const updatedUsers = state.filter((user) => user.id !== userId);
      state = updatedUsers;
      localStorage.setItem("users", JSON.stringify(state));
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state[index] = updatedUser;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
