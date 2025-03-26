import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoApp from './components/TodoApp';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoApp/>
    </div>
  );
}

export default App;
