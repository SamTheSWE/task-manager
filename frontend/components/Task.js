import React from 'react';

const Task = ({ task, setTasks }) => {
  const toggleComplete = async () => {
    const res = await fetch(`/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted: !task.isCompleted }),
    });
    const data = await res.json();
    setTasks(tasks => tasks.map(t => (t._id === data._id ? data : t)));
  };

  const deleteTask = async () => {
    await fetch(`/api/tasks/${task._id}`, {
      method: 'DELETE',
    });
    setTasks(tasks => tasks.filter(t => t._id !== task._id));
  };

  return (
    <div>
      <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={toggleComplete}>
        {task.isCompleted ? 'Undo' : 'Complete'}
      </button>
      <
