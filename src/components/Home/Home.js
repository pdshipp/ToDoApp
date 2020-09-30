import React, { Component } from "react";
import Todos from "./Todos.js";
import AddTodo from "./addTodo";

class ToDoPage extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Bread" },
      { id: 2, content: "Watch Footy" },
    ],
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
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
        <h1 className="center teal-text text-lighten-2">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ToDoPage;
