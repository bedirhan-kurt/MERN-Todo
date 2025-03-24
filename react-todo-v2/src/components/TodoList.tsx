import TaskCard from "@/components/TaskCard.tsx";
import {useTodo} from "@/hooks/useTodo.tsx";

export default function TodoList() {
    const { todos } = useTodo();

    return (
        <div>
            {todos.map(todo => (
                <TaskCard
                    key={todo.id}
                    taskId={todo.id}
                    taskName={todo.taskName}
                    taskDescription={todo.taskDescription}
                    taskDueDate={todo.dueDate}
                    taskPriority={todo.priority}
                />
            ))}
        </div>
    );
}