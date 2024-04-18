import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTimeStamp } from "../assets/GlobalAssets";

const initialState = {
  boards: [
    {
      id: 1,
      title: "BajsBoard",
      dateCreated: getTimeStamp,
      columns: [],
    },
  ],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const board = {
        id: nanoid(),
        title: action.payload,
        dateCreated: getTimeStamp(),
        columns: [],
      };
      state.boards.push(board);
    },
    removeBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },

    addStory: (state, action) => {
      const story = {
        id: nanoid(),
        title: action.payload,
        content: "",
        dateCreated: getTimeStamp(),
        deadLine: "",
        dueDate: "",
        isUrgent: false,
        userOwnership: [],
        tasks: [],
      };
      state.stories.push(story);
    },
    removeStory: (state, action) => {
      state.stories = state.stories.filter(
        (story) => story.id !== action.payload
      );
    },
    addTask: (state, action) => {
      const task = {
        id: 1,
        title: action.payload,
        content: "",
        dateCreated: "",
        category: "",
        deadLine: "",
        dueDate: "",
        isUrgent: false,
        isCompleted: false,
        userOwnership: [],
      };
      state.tasks.push(task);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  addBoard,
  removeBoard,
  addTask,
  removeTask,
  addStory,
  removeStory,
} = boardSlice.actions;
export default boardSlice.reducer;
