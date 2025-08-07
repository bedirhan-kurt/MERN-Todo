const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Must provide a user ID for the task.'],
    },
    name: {
        type: String,
        required: [true, 'Must provide a task name.'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    description: {
        type: String,
        maxlength: [100, 'Description can not be more than 100 characters.'],
    },
    priority: {
        type: String,
        required: [true, 'Must provide a task priority.'],
        enum: ['low', 'medium', 'high'],
    },
    status: {
        type: String,
        required: [true, 'Must provide a task status.'],
        enum: ['inProgress', 'completed', 'blocked'],

    },
})

module.exports = mongoose.model('Task', TaskSchema)