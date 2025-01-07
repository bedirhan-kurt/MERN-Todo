import FunctionsForm from "./FunctionsForm.jsx";
import NewTaskForm from "./NewTaskForm.jsx";
import {useState} from "react";

export default function MainMenu({resetFilters, taskLimit, taskList, setTaskList, processedTasks, setProcessedTasks}) {
    let [activeForm, setActiveForm] = useState("New Task Form")

    return (
        <div
            className={"w-full flex flex-col gap-4 rounded-lg dark:border-gray-700 dark:text-gray-300 transition-all duration-300"}>
            <div className={"flex justify-center"}>
                <button className={`w-1/2 pb-1 ${activeForm === "New Task Form" ? "border-b" : null} border-border`}
                        onClick={() => setActiveForm("New Task Form")}>Create New Task
                </button>
                <button className={`w-1/2 pb-1 ${activeForm === "Functions Form" ? "border-b" : null} border-border`}
                        onClick={() => setActiveForm("Functions Form")}>Functions
                </button>
            </div>
            {activeForm === "New Task Form" ?
                <NewTaskForm taskLimit={taskLimit} taskList={taskList} setTaskList={setTaskList}/> : null}
            {activeForm === "Functions Form" ?
                <FunctionsForm resetFilters={resetFilters} taskList={taskList} processedTasks={processedTasks} setProcessedTasks={setProcessedTasks}/> : null}
        </div>
    )
}