import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTimeStamp } from "../assets/GlobalAssets";

const initialState = [];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      // Update the state with the boards from the payload
      return action.payload;
    },
    addBoard: (state, action) => {
      const board = {
        id: nanoid(),
        title: action.payload,
        dateCreated: getTimeStamp(),
        columns: [],
      };
      state.push(board);
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },
    removeBoard: (state, action) => {
      state = state.filter(
        (board) => board.id !== action.payload
      );
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },
    addColumn: (state, action) => {
      const { title, boardId } = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      if (boardIndex !== -1) {

        const column = {
              id: nanoid(),
              title: title,
              dateCreated: getTimeStamp(),
              stories: [],
          };
          state[boardIndex].columns.push(column)
        }
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },


    addStory: (state, action) => {
      const { title, columnId, boardId} = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      const columnIndex = state[boardIndex].columns.findIndex(column => column.id === columnId);
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
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    }
  },
    removeStory: (state, action) => {
      state.columns.stories = state.columns.stories.filter(
        (story) => story.id !== action.payload
      );
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },
    addTask: (state, action) => {
      const { title, columnId, boardId, storyId} = action.payload;
      const boardIndex = state.findIndex(board => board.id === boardId);
      const columnIndex = state[boardIndex].columns.findIndex(column => column.id === columnId);
      const storyIndex = state[boardIndex].columns[columnIndex].stories.findIndex(story => story.id === storyId);
      if (columnIndex !== -1 && boardIndex !== -1 && storyIndex !== -1) {

      const task = {
        id: nanoid(),
        title: title,
        content: "",
        dateCreated: "",
        categories: [],
        deadLine: "",
        dueDate: "",
        isUrgent: false,
        isCompleted: false,
        userOwnership: [],
      };
      state[boardIndex].columns[columnIndex].stories[storyIndex].tasks.push(task)
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    }},
    removeTask: (state, action) => {
      const { boardId, columnId, storyId, taskId } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      if (boardIndex !== -1) {
        const columnIndex = state[boardIndex].columns.findIndex((column) => column.id === columnId);
        if (columnIndex !== -1) {
          const storyIndex = state[boardIndex].columns[columnIndex].stories.findIndex((story) => story.id === storyId);
          if (storyIndex !== -1) {
            // Remove task from tasks array
            state[boardIndex].columns[columnIndex].stories[storyIndex].tasks = state[boardIndex].columns[columnIndex].stories[storyIndex].tasks.filter(
              (task) => task.id !== taskId
            );
          }
        }
      }
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },

    editTask: (state, action) => {
      const { boardId, columnId, storyId, taskId, editedTask } = action.payload;
      return state.map(board => {
        if (board.id !== boardId) {
          return board; // If not the target board, return unchanged
        }
        return {
          ...board,
          columns: board.columns.map(column => {
            if (column.id !== columnId) {
              return column; // If not the target column, return unchanged
            }
            return {
              ...column,
              stories: column.stories.map(story => {
                if (story.id !== storyId) {
                  return story; // If not the target story, return unchanged
                }
                return {
                  ...story,
                  tasks: story.tasks.map(task => {
                    if (task.id !== taskId) {
                      return task; // If not the target task, return unchanged
                    }
                    // Update the target task with the new data
                    return {
                      ...task,
                      ...editedTask
                    };
                  })
                };
              })
            };
          })
        };
      });
      localStorage.setItem("boards", JSON.stringify(state)); // Update localStorage
    },
  },
});

export const {
  setBoards,
  addBoard,
  removeBoard,
  addColumn,
  removeColumn ,
  addTask,
  editTask, 
  removeTask,
  addStory,
  removeStory,
} = boardSlice.actions;
export default boardSlice.reducer;
