import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            className="waves-effect waves-teal btn-flat filled-in"
            onClick={() => {
              deleteTodo(todo.id);
            }}>
            {todo.title}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todos left, well in!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
