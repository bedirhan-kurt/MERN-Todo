import TaskCard from "todo-app/front-end/src/features/tasks-[page]/get-tasks-[feat]/components/TaskCard.tsx";
import {useCreateTask} from "todo-app/front-end/src/features/tasks-[page]/create-task-[feat]/hooks/useCreateTask.tsx";

export default function TodoList() {
    const { todos } = useCreateTask();

    return (
        <div>
            {todos.map(todo => (
                <TaskCard
                    key={todo.id}
                    taskId={todo.id}
                    taskName={todo.taskName}
                    taskDescription={todo.taskDescription}
                    taskDueDate={todo.taskDueDate}
                    taskPriority={todo.taskPriority}
                />
            ))}
        </div>
    );
}