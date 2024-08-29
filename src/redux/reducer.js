const initialState = {
  todos: [
    { note: "wwwww", checked: false },
    { note: "ddddd", checked: true },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          index === action.id ? action.payload : item
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case "CHECK_TODO":
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          index === action.payload ? { ...item, checked: !item.checked } : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
