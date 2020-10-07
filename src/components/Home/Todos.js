import React from "react";
import { Link } from "react-router-dom";

//need to add animation to deleteTodo
const Todos = ({ todos, completeTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      const isChecked = todo.checked ? "checked" : "";
      return (
        <div className={`collection-item ` + isChecked} key={todo.id}>
          <label>
            <input
              type="checkbox"
              onClick={() => {
                setTimeout(() => {
                  completeTodo(todo.id);
                }, 200);
              }}
            />
            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
              }}
              className="todo-text">
              <Link to={"/" + todo.id} style={{ color: "inherit" }}>
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

export default Todos;
