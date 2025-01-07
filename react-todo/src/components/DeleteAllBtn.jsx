import React from "react";
import {toast} from "react-toastify";

export default function DeleteAllBtn(props) {
    function handleDeleteAll() {
        if (props.taskList.length > 0) {
            toast.info("All Tasks Deleted");
        } else {
            toast.warning("There is no task to delete");
        }


        props.setTaskList([])
        props.setProcessedTasks(null)
    }

    return (
        <button
            onClick={handleDeleteAll}
            className={"w-full py-2 bg-white text-black border border-border rounded-lg shadow-md hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-200"}
        >
            Delete All
        </button>
    )
}