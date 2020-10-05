import React, { Component } from "react";
import axios from "axios";

class TodoAbout extends Component {
  state = {
    todo: null,
  };
  componentDidMount() {
    let id = this.props.match.params.todo_id;
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => {
        this.setState({
          todo: res.data,
        });
      });
  }
  render() {
    const todo = this.state.todo ? (
      <div className="todo">
        <h3>{this.state.todo.title}</h3>
      </div>
    ) : (
      <div className="center"> Loading Todo</div>
    );

    return (
      <div className="container">
        <h4>{todo}</h4>
      </div>
    );
  }
}

export default TodoAbout;
