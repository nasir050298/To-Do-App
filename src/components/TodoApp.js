import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditing = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setEditedText(taskText);
  };

  const saveEdit = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, text: editedText } : task
    ));
    setEditingTaskId(null);
    setEditedText('');
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedText('');
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Render the task list only when there are tasks */}
      {tasks.length > 0 && (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              ) : (
                <span>{task.text}</span>
              )}

              <div className="button-container">
                {editingTaskId === task.id ? (
                  <>
                    <button onClick={() => saveEdit(task.id)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
                    <button onClick={() => toggleComplete(task.id)} className="complete-btn">
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Render Clear Completed button only if there are tasks */}
      {tasks.length > 0 && (
        <button onClick={clearCompleted} className="clear-completed-btn">
          Clear Completed Tasks
        </button>
      )}
    </div>
  );
};

export default TodoApp;
