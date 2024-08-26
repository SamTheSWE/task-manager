const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { name } = req.body;
  const task = new Task({ name });
  await task.save();
  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.name = req.body.name || task.name;
  task.isCompleted = req.body.isCompleted !== undefined ? req.body.isCompleted : task.isCompleted;
  await task.save();
  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.remove();
  res.json({ message: 'Task removed' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
