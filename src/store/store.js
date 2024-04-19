import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../slices/BoardSlice";

const store = configureStore({
  reducer: {
    boards: boardReducer,
  },
});

export default store;
