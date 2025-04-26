const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');
const validateObjectId = require('../middlware/validateObjectId');
const validateStatus = require('../middlware/validateStatus');

//Post: Add new task 
router.post("/tasks",controller.postTask);

// Get: Return all tasks
router.get("/tasks",controller.getAllTasks);

// Get: Return task by Object ID
router.get("/tasks/:id",validateObjectId, controller.getSpecificTask);

// Patch: Update task by Object ID
router.patch("/tasks/:id",validateObjectId, validateStatus, controller.updateTaskStatus);

//Delete: Delete task by Object ID
router.delete("/tasks/:id",validateObjectId, controller.deleteTask);

module.exports = router;