import React, { Component } from "react";
import { addTodo } from "../../actions/TodoActions";
import { connect } from "react-redux";

const AddTodo = ({ addTodo }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = "";
        }}>
        <label htmlFor="content">Input Todo</label>
        <input type="text" id="title" ref={(node) => (input = node)} />
        <button className="btn waves-effect waves-light">Add Todo</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
