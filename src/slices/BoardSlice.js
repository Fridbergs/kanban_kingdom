import {createSlice, nanoid} from "@reduxjs/toolkit";
import {getTimeStamp} from "../assets/GlobalAssets";

const initialState = []

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
      state.push(board);
    },
    removeBoard: (state, action) => {
      state = state.filter(
        (board) => board.id !== action.payload
      );
    },
    addColumn: (state, action) => {
      const { title, boardId } = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      console.log(boardId)
      if (boardIndex !== -1) {

        const column = {
              id: nanoid(),
              title: title,
              dateCreated: getTimeStamp(),
              stories: [],
          };
          state[boardIndex].columns.push(column)
        }
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
    },


    addStory: (state, action) => {
      const { title, columnId, boardId} = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      const columnIndex = state[boardIndex].columns.findIndex(column => column.id === columnId);
      console.log(boardIndex, columnIndex)
      if (columnIndex !== -1 && boardIndex !== -1) {

      const story = {
        id: nanoid(),
        title: title,
        content: "",
        dateCreated: getTimeStamp(),
        deadLine: "",
        dueDate: "",
        isUrgent: false,
        userOwnership: [],
        tasks: [],
      };
      state[boardIndex].columns[columnIndex].stories.push(story)
    }
  },
    removeStory: (state, action) => {
      state.columns.stories = state.columns.stories.filter(
        (story) => story.id !== action.payload
      );
    },
    addTask: (state, action) => {
      const { title, columnId, boardId, storyId} = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      const columnIndex = state[boardIndex].columns.findIndex(column => column.id === columnId);
      const storyIndex = state[boardIndex].columns[columnIndex].stories.findIndex(story => story.id === storyId);
      if (columnIndex !== -1 && boardIndex !== -1 && storyIndex !== -1) {

      const task = {
        id: 1,
        title: title,
        content: "",
        dateCreated: "",
        category: "",
        deadLine: "",
        dueDate: "",
        isUrgent: false,
        isCompleted: false,
        userOwnership: [],
      };
      state[boardIndex].columns[columnIndex].stories[storyIndex].tasks.push(task)
 
    }}
  ,
    removeTask: (state, action) => {
      state.columns.stories.tasks = state.columns.stories.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  addBoard,
  removeBoard,
  addColumn,
  removeColumn ,
  addTask,
  removeTask,
  addStory,
  removeStory,
} = boardSlice.actions;
export default boardSlice.reducer;
