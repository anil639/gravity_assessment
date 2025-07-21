import React, { useState, useEffect, useRef } from "react";
import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
import Filter from "../Components/Filter";
import { loadTodos, saveTodos } from "../Utils/localStorage";
import "../Styles/styles.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const isFirstRender = useRef(true);

  // load from localStorage
  useEffect(() => {
    const stored = loadTodos();
    // console.log("todos==>", stored);
    if (Array.isArray(stored)) {
      setTodos(stored);
    }
  }, []);
  // save to local storage
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // console.log("todos", todos);
    saveTodos(todos);
  }, [todos]);

  // add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // filter todos based on status
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1>TO-DO LIST</h1>
      <AddTodo onAdd={addTodo} />
      <Filter current={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
