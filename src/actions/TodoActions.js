export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const strikeThroughTodo = (id) => {
  return {
    type: "STRIKETHROUGH_TODO",
    id,
  };
};

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: Math.random(),
    text,
  };
};
