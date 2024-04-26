import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slices/BoardSlice";
import userReducer from "../slices/UserSlice"; // Import userSlice reducer

const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("boards", JSON.stringify(store.getState())); // Save the entire store state
  return result;
};

const store = configureStore({
  reducer: {
    boards: boardReducer,
    users: userReducer, // Include userSlice reducer in the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

export default store;
