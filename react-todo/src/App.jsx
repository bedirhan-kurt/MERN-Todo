import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm.jsx";
import Task from "./components/Task.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";

function App() {
    const taskLimit = 5

    const [taskList, setTaskList] = useState([]);
    // Under development const [deleteTask, setDeleteTask] = useState(false);

    function addNewTask(taskName, taskPriority, taskStatus, taskId) {
        if (taskList.length < taskLimit) {
            setTaskList([...taskList, {taskName, taskPriority, taskStatus, taskId}]);
        }
    }

    function handleStatusChange(taskId, newStatus) {
        setTaskList((prevTaskList) => {
            const newTaskList = prevTaskList.map((task) => {
                return task.taskId === taskId
                    ? {...task, taskStatus: newStatus}
                    : task;
            });
            return ([...newTaskList])
        });
    }

    function handleDelete(taskId) {
        // Under development setDeleteTask(!deleteTask);
        setTaskList((prevTaskList) => {
            return prevTaskList.filter((task) => task.taskId !== taskId);
        });
    }

    /* Under development function handleDeleteConfirmed(taskId) {
        setTaskList((prevTaskList) => {
            const newTaskList = prevTaskList.map((task) => {
                return task.taskId === taskId
                    ? null
                    : task;
            });
            return ([...newTaskList])
        });
    } */

    const taskElements = taskList.map(task => (
        <Task key={task.taskId} id={task.taskId} name={task.taskName} priority={task.taskPriority} status={task.taskStatus} handleStatusChange={handleStatusChange} handleDelete={handleDelete} />
    ));

    return (
        <main className="w-96 flex flex-col items-center justify-center gap-6">
            <NewTaskForm addNewTask={addNewTask} />

            <div className="w-full border-b border-black"></div>

            <div className="w-full flex flex-col gap-2">
                {taskElements}
            </div>

            {taskList.length === taskLimit && <p>You have reached task limit: {taskLimit} / {taskLimit}</p>}
            {/* Under development deleteTask && <DeleteConfirmation handleDeleteConfirmed={handleDeleteConfirmed} /> */}
        </main>
    );
}

export default App;