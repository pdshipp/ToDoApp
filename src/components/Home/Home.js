import React, { Component } from "react";
import Todos from "./Todos.js";
import AddTodo from "./addTodo";
import axios from "axios";

class ToDoPage extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({
        todos: res.data.slice(0, 10),
      });
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];

    this.setState({ todos });
  };

  strikeThroughTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      }),
    });
    setTimeout(() => {
      this.deleteTodo(id);
    }, 1500);
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text text-lighten-2">Todo's</h1>
        <Todos todos={this.state.todos} completeTodo={this.strikeThroughTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ToDoPage;
