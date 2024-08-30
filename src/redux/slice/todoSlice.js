import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: Date.now(),
      note: "initial note",
      checked: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), note: action.payload, checked: false });
    },
    checkTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, note } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.note = note;
      }
    },
  },
});

export const { addTodo, checkTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
