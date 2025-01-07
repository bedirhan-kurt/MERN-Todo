import React, {useContext} from 'react';
import {nanoid} from 'nanoid'

export default function NewTaskForm(props) {
    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)

        const taskName = formData.get("taskName")
        const taskPriority = formData.get("priority")
        const taskStatus = false // True: Completed, False: Uncompleted
        const taskId = crypto.randomUUID()

        if (props.taskList.length < props.taskLimit) {
            props.setTaskList([...props.taskList, {taskName, taskPriority, taskStatus, taskId}]);
        }

        formEl.reset()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="animate-fade-in w-full flex flex-col items-center justify-center gap-4"
        >
            <label
                className="w-full p-2 bg-white border border-border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
                <input
                    id="taskName"
                    name="taskName"
                    type="text"
                    className="w-full focus:outline-none bg-transparent text-black dark:text-gray-300"
                    placeholder="Task Name"
                    autoComplete="off"
                />
            </label>

            <div className="w-full inline-flex rounded-md shadow-md" role="group">
                <label
                    className="w-1/3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-black transition-all duration-300 focus:z-10 focus:ring-2 focus:ring-black focus:text-blue-700 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
                    <input
                        type="radio"
                        name="priority"
                        value="High"
                        className="accent-rose-300 dark:accent-rose-500"
                    />
                    <span className="ml-2">High</span>
                </label>
                <label
                    className="w-1/3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-black transition-all duration-300 focus:z-10 focus:ring-2 focus:ring-black focus:text-blue-700 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
                    <input
                        type="radio"
                        name="priority"
                        value="Medium"
                        className="accent-amber-300 dark:accent-amber-500"
                    />
                    <span className="ml-2">Medium</span>
                </label>
                <label
                    className="w-1/3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-black transition-all duration-300 focus:z-10 focus:ring-2 focus:ring-black focus:text-blue-700 flex items-center justify-center cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
                    <input
                        type="radio"
                        name="priority"
                        value="Low"
                        className="accent-emerald-300 dark:accent-emerald-500"
                    />
                    <span className="ml-2">Low</span>
                </label>
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-black text-white border border-black rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border dark:border-gray-700"
            >
                Add
            </button>
        </form>

    )
}