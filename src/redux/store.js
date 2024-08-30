import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
