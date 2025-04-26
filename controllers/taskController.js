const Task = require('../modells/task');
const mongoose = require('mongoose')

// POST: Create a new task
const postTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    const newTask = await Task.create({
      title,
      description,
      status,
      dueDate
    });

    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//Get: Return all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({error: 'Server error'})
  }
}

// Get: Return task by ID
const getSpecificTask = async (req,res) => {
  const {id} = req.params
  try {
    const returnTask = await Task.findById(id)

    if (!returnTask) {
      return res.status(404).json({ error: 'This task was not found in the database.' });
    }

    res.status(200).json(returnTask);
  } catch (error) {
    res.status(500).json({error: 'Server error.'})
  }
}

//PATCH: Update task status by ID
const updateTaskStatus = async (req, res) => {
    const {id} = req.params;
    const {status} = req.body;

    try {
  
      const returnUpdatedTask = await Task.findByIdAndUpdate(id, {status},{ new: true, runValidators: true } );
  
      if (!returnUpdatedTask) {
        return res.status(404).json({ error: 'This task was not found in the database.' });
      }
  
      res.status(200).json(returnUpdatedTask)
  
    } catch (error) {
      res.status(500).json({error: 'Server error.'})
    }
  }
  
//DELETE: Removing task by ID
const deleteTask = async (req,res) => {
  const {id} = req.params;

  try {
    const removeTask = await Task.findByIdAndDelete(id);

    if(!removeTask) {
      return res.status(404).json({error: 'This task was not found in the database.'})
    }

    return res.status(200).json(removeTask);
  } catch (error) {
    res.status(500).json({error: 'Server error.'})
  }
  
}

module.exports = {
  postTask,
  getAllTasks,
  getSpecificTask,
  updateTaskStatus,
  deleteTask
};