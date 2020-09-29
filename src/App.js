import React, { Component } from "react";
import Todos from "./Todos.js";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Bread" },
      { id: 2, content: "Watch Footy" },
    ],
  };
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
