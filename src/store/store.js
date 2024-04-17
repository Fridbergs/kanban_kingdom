import {configureStore} from "@reduxjs/toolkit";
import boardSlice from "../slices/BoardSlice";

const store = configureStore({
  reducer: boardSlice,
});

export default store;
