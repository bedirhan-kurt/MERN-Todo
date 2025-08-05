import { createContext, useContext, useState, ReactNode } from "react";

interface Todo {
    id: number;
    taskName: string;
    taskDescription?: string;
    taskPriority?: string;
    taskDueDate?: Date;
    taskStatus?: string;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (taskName: string, taskDescription?: string, priority?: string, dueDate?: Date) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(taskName: string, taskDescription?: string, taskPriority?: string, taskDueDate?: Date): void {
        const todo: Todo = {
            id: todos.length + 1,
            taskName,
            taskDescription,
            taskPriority,
            taskDueDate
        };

        setTodos(prevTodos => [...prevTodos, todo]);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useCreateTask() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useEditTask must be used within a TodoProvider");
    }
    return context;
}