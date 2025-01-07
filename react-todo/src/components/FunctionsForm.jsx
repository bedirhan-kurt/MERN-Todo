import React, {useEffect, useState} from "react";

export default function FunctionsForm({resetFilters, taskList, processedTasks, setProcessedTasks}) {
    const [formState, setFormState] = useState({
        search: "",
        filter: "",
        sort: "",
    });

    const priorityOrder = {
        "High": 1,
        "Medium": 2,
        "Low": 3,
    };

    useEffect(() => {
        const {search, filter, sort} = formState;

        const processedTasks = taskList
            .filter((task) => {
                if (!filter) return true;
                if (filter === "Completed") return task.taskStatus === true;
                if (filter === "Uncompleted") return task.taskStatus === false;
                return task.taskPriority === filter;
            })
            .sort((a, b) => {
                if (!sort) return 0;
                if (sort === "HtL") return priorityOrder[a.taskPriority] - priorityOrder[b.taskPriority];
                if (sort === "LtH") return priorityOrder[b.taskPriority] - priorityOrder[a.taskPriority];
                return 0;
            })
            .filter((task) => {
                if (!search) return true;
                return task.taskName.toLowerCase().includes(search.toLowerCase());
            });

        setProcessedTasks(processedTasks);
    }, [taskList, formState]);

    console.log(processedTasks);
    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setFormState({
            search: formData.get("search") || "",
            filter: formData.get("filter") || "",
            sort: formData.get("sort") || "",
        });

        event.currentTarget.reset();
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className="animate-fade-in w-full flex-col items-center">
                <input
                    autoComplete="off"
                    name="search"
                    type="text"
                    className="mb-2 w-full h-9 px-4 bg-white text-sm border border-border rounded-lg shadow-md focus:outline-none hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                    placeholder="Search..."
                />

                <div className="flex items-center gap-2">
                    <select
                        name="filter"
                        className="w-full h-9 px-4 flex gap-2 justify-center items-center bg-white text-sm border border-border rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                        defaultValue="filter"
                    >
                        <option value="filter" disabled>
                            Filter
                        </option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                        <option value="High">High Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="Low">Low Priority</option>
                    </select>

                    <select
                        name="sort"
                        className="w-full h-9 px-4 flex gap-2 justify-center items-center bg-white text-sm border border-border rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                        defaultValue="sort"
                    >
                        <option value="sort" disabled>
                            Sort
                        </option>
                        <option value="LtN">Latest to Newest</option>
                        <option value="NtL">Newest to Latest</option>
                        <option value="HtL">High to Low Priority</option>
                        <option value="LtH">Low to High Priority</option>
                    </select>

                    <button
                        type="submit"
                        className="w-8 h-9 px-4 flex gap-2 justify-center items-center bg-white text-sm border border-border rounded-lg shadow-md hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                    >
                        <i className="ri-check-line"></i>
                    </button>
                </div>
            </form>
            {(formState.search || formState.filter || formState.sort) && (taskList !== processedTasks) ?
                <button onClick={resetFilters}
                        className={"w-24 mb-4 text-xs underline hover:text-blue-900 dark:text-gray-300 dark:hover:text-blue-300"}>
                    Clean Filters
                </button> : null}
        </>
    );
}