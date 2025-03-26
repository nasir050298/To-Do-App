import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
