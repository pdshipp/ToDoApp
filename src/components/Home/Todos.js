import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodo, strikeThroughTodo } from "../../actions/TodoActions";

const Todos = ({ todo, deleteTodo, strikeThroughTodo }) => {
  const todoList = todo.length ? (
    todo.map((todo) => {
      const isChecked = todo.checked ? "checked" : "";
      return (
        <div className={`collection-item ` + isChecked} key={todo.id}>
          <label>
            <input
              type="checkbox"
              onClick={() => {
                strikeThroughTodo(todo.id);
                setTimeout(() => {
                  deleteTodo(todo.id);
                }, 1500);
              }}
            />
            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
              }}>
              <Link className="todo-text" to={"/" + todo.id}>
                {todo.title}
              </Link>
            </span>
          </label>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todos left!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

const mapStateToProps = (state) => {
  return {
    todo: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    strikeThroughTodo: (id) => {
      dispatch(strikeThroughTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
