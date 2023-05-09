const express = require('express');
const app = express();
const router = express.Router();

const { getAllTasks, getTask, updateTask, deleteTask, addTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;