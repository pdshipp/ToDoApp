import React, { Component } from "react";
import Todos from "./Todos.js";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Bread" },
      { id: 2, content: "Watch Footy" },
    ],
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
