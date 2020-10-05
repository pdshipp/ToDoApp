import React from "react";
import { Link } from "react-router-dom";

//need to add animation to deleteTodo
const Todos = ({ todos, completeTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      const isChecked = todo.checked ? "checked" : "";
      return (
        <div className={`collection-item ` + isChecked} key={todo.id}>
          <label htmlFor="cbx">
            <i
              className="material-icons teal-text btn-flat left"
              onClick={() => {
                completeTodo(todo.id);
              }}>
              check
            </i>
            <Link to={"/" + todo.id}>
              <span
                style={{
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
                className="black-text">
                {todo.title.toUpperCase()}
              </span>
            </Link>
          </label>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todos left, well in!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
