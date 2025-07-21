import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li className="empty">No Task Found</li>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
