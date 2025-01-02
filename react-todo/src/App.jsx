import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import NewTaskForm from "./components/NewTaskForm.jsx";
import Task from "./components/Task.jsx";
import DeleteAllBtn from "./components/DeleteAllBtn.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";

function App() {
    const taskLimit = 5

    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem("taskList");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

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
        toast.info("Task Deleted");

        setTaskList((prevTaskList) => {
            return prevTaskList.filter((task) => task.taskId !== taskId);
        });
    }

    function handleDeleteAll() {
        toast.info("All Tasks Deleted");

        setTaskList([])
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
        <div className={"h-screen flex flex-col"}>
            <main className="w-96 flex flex-col flex-grow items-center justify-center gap-6">
                <header><h1 className={"text-3xl font-semibold"}>React Todo App</h1></header>

                <NewTaskForm addNewTask={addNewTask}/>

                <div className="w-full border-b border-black"></div>

                <div className="w-full flex flex-col gap-2">
                    {taskElements}
                </div>

                <div className="w-full border-b border-black"></div>

                <DeleteAllBtn handleDeleteAll={handleDeleteAll}/>

                {taskList.length === taskLimit && <p>You have reached task limit: {taskLimit} / {taskLimit}</p>}
                {/* Under development deleteTask && <DeleteConfirmation handleDeleteConfirmed={handleDeleteConfirmed} /> */}

                <ToastContainer
                    position={"top-center"}
                    hideProgressBar={true}
                />
            </main>

            <footer>
                <p className={"text-xs text-center mb-4"}>By Bedirhan KURT</p>
            </footer>
        </div>
)
    ;
}

export default App;