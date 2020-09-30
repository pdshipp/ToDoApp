import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: " ",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Input Todo</label>
          <input
            type="text"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button className="btn waves-effect waves-light">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
