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
    updateTodo: (id: number, taskName: string, taskDescription?: string, priority?: string, dueDate?: Date) => void;
    deleteTodo: (id: number) => void
    updateStatus : (id: number, taskStatus: string) => void
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

    function updateTodo(id: number,  taskName: string, taskDescription?: string, taskPriority?: string, taskDueDate?: Date): void {
        const newValues = {
            taskName,
            taskDescription,
            taskPriority,
            taskDueDate
        }
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, ...newValues} : todo));
        console.log(todos)
    }

    function updateStatus(id: number, taskStatus: string): void {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, taskStatus} : todo));
        console.log(todos)
    }

    function deleteTodo(id: number): void {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, updateStatus }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}