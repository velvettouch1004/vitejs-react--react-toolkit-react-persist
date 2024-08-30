import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      {
        id: uuidv4(),
        note: "initial notes",
        checked: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: uuidv4(), note: action.payload, checked: false });
    },
    checkTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    removeTodo: (state, action) => {
      return state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, note } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        todo.note = note;
      }
    },
  },
});

export const { addTodo, checkTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
