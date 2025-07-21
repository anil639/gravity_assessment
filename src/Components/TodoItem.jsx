import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
