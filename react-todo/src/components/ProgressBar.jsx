export default function ProgressBar(props) {
    const progress = Math.round((props.completedTaskCount / props.taskCount) * 100)
    return (
        <div className={"mb-4 flex flex-col justify-start gap-2"}>
            <h1 className={"text-lg font-semibold dark:text-gray-300"}>Progress: {progress ? `%${progress}` : props.taskCount > 0 ? "%0" : "There is no task yet."}</h1>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className={"h-2 bg-green rounded-full transition-all duration-300 ease"}
                     style={{width: `${progress ? progress : "0"}%`}}></div>
            </div>
        </div>
    )
}