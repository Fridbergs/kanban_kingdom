import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTimeStamp } from "../assets/GlobalAssets";
import { useSelector, useDispatch } from "react-redux";

// const columns = useSelector((state) => state.boards.columns);

const initialState = {
  columns: [
    {
      id: 1,
      title: "BajsColumn",
      stories: [
        {
          id: 1,
          title: "BajsStory",
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
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
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
  },
});

export const { addColumn, removeColumn } = columnSlice.actions;
export default columnSlice.reducer;
