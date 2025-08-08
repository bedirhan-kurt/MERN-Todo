import TaskCard from "../../page-core/components/TaskCard";

export default function TasksElements({tasks}: { tasks: any[] }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start gap-4">
            {tasks.map((todo) => (
                <TaskCard
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    description={todo.description ? todo.description : ""}
                    priority={todo.priority}
                    status={todo.status}
                />
            ))}
        </div>
    );
}
