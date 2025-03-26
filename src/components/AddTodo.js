import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ id: Date.now(), text: input });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task" 
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddTodo;
