const Task = require('../models/Tasks');
const asyncWrapper = require('../middleware/asyncWrapper');
const createCustomError = require('../errors/customAPIError');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });
    res.json(req.body);
})

const createTask = asyncWrapper(async (req, res) => {
    const { userId, name, description, priority, status } = req.body;
    console.log('Received task data:', req.body);

    const task = new Task({ userId, name, description, priority, status });
    await task.save();

    res.status(201).json({ success: true, task });
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

const updateTaskStatus = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const { newStatus } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { status: newStatus },
        { new: true }
    );

    if (!updatedTask) {
        return next(createCustomError('Task not found', 404));
    }

    res.status(200).json({ updatedTask, message: 'Task status updated successfully' });
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;

    console.log(taskId)
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
        return next(createCustomError(`No task with id : ${taskId}`, 404))
    }
    res.status(200).json({ ...task, message: 'Task deleted successfully' });
})

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask
}