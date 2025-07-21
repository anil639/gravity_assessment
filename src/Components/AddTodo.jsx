import React, { use, useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={input}
        placeholder="Add a new task ..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
