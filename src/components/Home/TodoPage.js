import React, { Component } from "react";
import Todos from "./Todos.js";
import AddTodo from "./addTodo";
import { connect } from "react-redux";

class ToDoPage extends Component {
  render() {
    console.log(this.props.todo);
    return (
      <div className="todo-app container">
        <h1 className="center teal-text text-lighten-2">Todo's</h1>
        <Todos
          deleteTodo={this.deleteTodo}
          completeTodo={this.strikeThroughTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todos,
  };
};

export default connect(mapStateToProps)(ToDoPage);
