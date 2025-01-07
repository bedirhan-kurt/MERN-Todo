import {ToastContainer, toast} from 'react-toastify';
import {useState, useEffect, createContext, useContext} from "react";
import NewTaskForm from "./components/NewTaskForm.jsx";
import Task from "./components/Task.jsx";
import DeleteAllBtn from "./components/DeleteAllBtn.jsx";
import FunctionsForm from "./components/FunctionsForm.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import MainMenu from "./components/MainMenu.jsx";

function App() {
    let [allFormsVisibility, setAllFormsVisibility] = useState([0, 0]);

    function toggleAllFormsVisibility(newAllFormsVisibility) {
        setAllFormsVisibility(newAllFormsVisibility)
        console.log(newAllFormsVisibility)
    }

    const taskLimit = 10

    let [darkMode, setDarkMode] = useState(() => {
        const darkModePref = localStorage.getItem("darkMode");
        console.log(darkModePref);
        return darkModePref ? JSON.parse(darkModePref) : "";
    })
    console.log(darkMode)

    function toggleDarkMode() {
        setDarkMode((darkMode) => !darkMode);
    }

    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem("taskList");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [processedTasks, setProcessedTasks] = useState("");

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
        localStorage.setItem("darkMode", darkMode);
    }, [taskList, darkMode]);

    function resetFilters() {
        setProcessedTasks("");
    }

    const renderList = processedTasks ? processedTasks : taskList
    const taskElements = renderList.map(task => (
        <Task key={task.taskId} id={task.taskId} name={task.taskName} priority={task.taskPriority}
              status={task.taskStatus} taskList={taskList} setTaskList={setTaskList}/>
    ));

    return (
        <div className={"h-screen flex flex-col"}>
            <main className="w-96 flex flex-col flex-grow items-center justify-center gap-4">
                <DarkModeToggle toggleDarkMode={() => toggleDarkMode}/>
                <header><h1 className={"text-3xl font-semibold dark:text-white"}>React Todo App</h1></header>

                <MainMenu taskLimit={taskLimit} taskList={taskList} setTaskList={setTaskList}
                          setProcessedTasks={setProcessedTasks} resetFilters={resetFilters} processedTasks={processedTasks}/>

                <div className="w-full border-b border-black dark:border-gray-700"></div>

                <div className="w-full flex flex-col gap-2">
                    <ProgressBar taskCount={taskList.length}
                                 completedTaskCount={taskList.filter(task => task.taskStatus === true).length}/>

                    {taskElements}
                </div>

                {taskList.length > 0 && <div className="w-full border-b border-black dark:border-gray-700"></div>}

                <DeleteAllBtn taskList={taskList} setTaskList={setTaskList} setProcessedTasks={setProcessedTasks}/>

                {taskList.length === taskLimit &&
                    <p className={"dark:text-gray-300"}>You have reached task limit: {taskLimit} / {taskLimit}</p>}

                <ToastContainer
                    position={"top-center"}
                    hideProgressBar={true}
                    limit={2}
                    theme={"dark"}
                />
            </main>

            <footer>
                <p className={"text-xs text-center mb-4 dark:text-gray-300"}>By Bedirhan KURT</p>
            </footer>
        </div>
    );
}

export default App;