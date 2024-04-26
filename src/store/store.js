import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slices/BoardSlice";

const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("boards", JSON.stringify(store.getState())); // Save the entire store state
  return result;
};

const store = configureStore({
  reducer: {
    boards: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

export default store;
