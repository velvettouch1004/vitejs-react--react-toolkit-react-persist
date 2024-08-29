export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const editTodo = (todo, id) => ({
  type: "EDIT_TODO",
  payload: todo,
  id: id,
});

export const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  payload: index,
});

export const checkTodo = (index) => ({
  type: "CHECK_TODO",
  payload: index,
});
