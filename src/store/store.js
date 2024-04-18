import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boardReducer from "../slices/BoardSlice";
import columnReducer from "../slices/ColumnSlice";

// const rootReducer = combineReducers({
//   boards: boardReducer,
// });
const store = configureStore({
  board: boardReducer,
  column: columnReducer,
  task: taskReducer,
  user: userReducer,
  story: storyReducer,
});
export default store;
