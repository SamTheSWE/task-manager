import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm setTasks={setTasks} />
      {tasks.map(task => (
        <Task key={task._id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default Home;
