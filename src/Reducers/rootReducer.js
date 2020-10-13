const initState = {
  todos: [
    { id: "1", title: "delectus aut autem", checked: false },
    { id: "2", title: "quis ut nam facilis et officia qui", checked: false },
    { id: "3", title: "fugiat veniam minus", checked: false },
    { id: "4", title: "et porro tempora", checked: false },
    {
      id: "5",
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      checked: false,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_TODO": {
      let newTodos = state.todos.filter((todo) => {
        return action.id !== todo.id;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case "STRIKETHROUGH_TODO": {
      return Object.assign({}, state.todos, {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, {
            checked: !todo.checked,
          });
        }),
      });
    }
    case "ADD_TODO": {
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: action.id,
          title: action.text,
          checked: false,
        }),
      });
    }
    default:
      return state;
  }
};

export default rootReducer;

// addTodo = (todo) => {
//   todo.id = Math.random();
//   const todos = [...this.state.todos, todo];

//   this.setState({ todos });
// };
