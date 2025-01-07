import {toast} from "react-toastify";

export default function Task(props) {
    const bgColor = props.priority === "High" ? "bg-rose-300" : props.priority === "Medium" ? "bg-amber-300" : "bg-emerald-300";
    const textColor = props.priority === "High" ? "text-rose-800" : props.priority === "Medium" ? "text-amber-800" : "text-emerald-800";

    function handleStatusChange(taskId, newStatus) {
        props.setTaskList((prevTaskList) => {
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

        props.setTaskList((prevTaskList) => {
            return prevTaskList.filter((task) => task.taskId !== taskId);
        });
    }

    return (
        <div className="animate-fade-in w-full px-4 py-6 flex justify-between bg-white items-center gap-4 border border-border rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
            <div className={"flex items-center gap-4"}>
                <input type="checkbox" checked={!!props.status} className={"size-5 accent-black dark:accent-white"}
                       onChange={() => handleStatusChange(props.id, !props.status)}/>
                <p onChange={(e) => handleEdit(e)}
                   className={`text-lg ${props.status ? "line-through" : null}`}>{props.name}</p>
            </div>
            <div className={"flex items-center gap-4"}>
                <span
                    className={`${bgColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>{props.priority}</span>
                <button onClick={() => handleDelete(props.id)}><i
                    className="text-black dark:text-gray-300 ri-delete-bin-6-fill"></i></button>
            </div>
        </div>
    )
}