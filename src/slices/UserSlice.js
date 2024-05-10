// UserSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getTimeStamp } from '../assets/GlobalAssets';

/* BUG: When removing users, it will not reflect in the UI 
until the user refreshes the page. */

// Function to retrieve users from localStorage
const loadUsersFromLocalStorage = () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  return storedUsers;
};

const initialState = loadUsersFromLocalStorage();

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, photo } = action.payload;
      const defaultPhotos = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgPaz89D5X6buDwdzpBw6CKBxTICkawsI5TBQ6dhpCA&s',
        'https://t3.ftcdn.net/jpg/05/91/58/36/360_F_591583639_JaAqX4y6rORJshkPtctq5weTeNQ92js6.jpg',
        'https://img.freepik.com/premium-vector/cute-alpaca-cartoon-style_846317-65.jpg',
        'https://static.vecteezy.com/ti/gratis-vektor/p3/3777941-pingvin-tecknad-ga-sota-djur-illustration-vector.jpg',
      ];
      const randomIndex = Math.floor(Math.random() * defaultPhotos.length);
      const randomPhoto = defaultPhotos[randomIndex];

      const user = {
        id: nanoid(),
        name: name,
        dateJoined: getTimeStamp(),
        profilePhoto: photo || randomPhoto,
        selectedUser: false,
      };
      state.push(user);
      localStorage.setItem('users', JSON.stringify(state));
      console.log(user);
    },
    removeUser: (state, action) => {
      //* FUN FACTS.. Denna utkommenterade kod fungerar lika bra =)

      // const userToRemove = action.payload;
      // console.log('DELETE USER: ', userToRemove);
      // const index = state.findIndex((user) => user.id === userToRemove.id);
      // if (index !== -1) {
      //   state.splice(index, 1);
      //   localStorage.setItem('users', JSON.stringify(state));
      // }

      const userToRemove = action.payload;
      console.log('DELETE USER: ', userToRemove);
      const updatedUsers = state.filter((user) => user.id !== userToRemove.id);
      localStorage.setItem('users', JSON.stringify(state));
      return updatedUsers;
    },

    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(state));
      }
    },
    setSelectedUser: (state, action) => {},
    //Få boolean att bli true och mappa mot id.
  },
});

export const { setSelectedUser, addUser, removeUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
