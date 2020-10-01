import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <i
            className="material-icons teal-text btn-flat left"
            onClick={() => {
              deleteTodo(todo.id);
            }}>
            check
          </i>
          <span className="">{todo.title.toUpperCase()}</span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todos left, well in!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;

// waves-effect waves-teal btn-flat filled-in">
