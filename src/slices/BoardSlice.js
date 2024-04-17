import {createSlice, nanoid} from "@reduxjs/toolkit";

function getTimeStamp() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const initialState = {
  boards: [
    {
      id: 1,
      title: "Testboard",
      dateCreated: "",
      columns: [
        {
          id: 1,
          title: "TestColumn",
          stories: [
            {
              id: 1,
              title: "TestStory",
              content: "",
              dateCreated: "",
              deadLine: "",
              dueDate: "",
              isUrgent: false,
              userOwnership: [],
              tasks: [
                {
                  id: 1,
                  title: "",
                  content: "",
                  dateCreated: "",
                  category: "",
                  deadLine: "",
                  dueDate: "",
                  isUrgent: false,
                  isCompleted: false,
                  userOwnership: [],
                },
              ],
            },
          ],
        },
      ],
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
    addColumn: (state, action) => {
      const column = {
        id: nanoid(),
        title: action.payload,
        dateCreated: getTimeStamp(),
        stories: [],
      };
      state.columns.push(column);
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
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
      state.stories = state.stories.filter((story) => story.id !== action.payload);
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

export const {addBoard, removeBoard, addTask, removeTask, addColumn, removeColumn, addStory, removeStory} = boardSlice.actions;
export default boardSlice.reducer;
