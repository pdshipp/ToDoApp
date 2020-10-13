import React, { Component } from "react";
import { connect } from "react-redux";

class TodoAbout extends Component {
  state = {
    todo: null,
  };

  render() {
    const todo = this.props.todo ? (
      <div className="container">
        <h3>{this.props.todo.title}</h3>
      </div>
    ) : (
      <div className="center">Loading data...</div>
    );

    return <div className="center">{todo}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.todo_id;
  return {
    todo: state.todos.find((todo) => todo.id === id),
  };
};

export default connect(mapStateToProps)(TodoAbout);
