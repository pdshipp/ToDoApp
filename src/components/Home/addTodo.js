import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
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
      title: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Input Todo</label>
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <button className="btn waves-effect waves-light">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
