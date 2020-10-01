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
      console.log(res);
      this.setState({
        todos: res.data.slice(0, 10),
      });
    });
  }
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
    const { todos } = this.state;
    const todoList = todos.length ? (
      todos.map((todo) => {
        return (
          <div className="post card" key={todo.id}>
            <div className="card-content">
              <span className="card-title">{todo.title}</span>
              <p>{todo.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No todos yet</div>
    );
    return (
      <div className="todo-app container">
        <h1 className="center teal-text text-lighten-2">Todo's</h1>
        <h1>{todoList}</h1>
        <Todos todos={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ToDoPage;
