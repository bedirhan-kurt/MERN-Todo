import TaskCard from "../../[page-core]/components/TaskCard";

export default function TasksElements({tasks}: { tasks: any[] }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start gap-4">
            {tasks.map((task) => (
                <TaskCard
                    key={task['_id']}
                    id={task['_id']}
                    name={task.name}
                    description={task.description ? task.description : ""}
                    priority={task.priority}
                    status={task.status}
                />
            ))}
        </div>
    );
}
