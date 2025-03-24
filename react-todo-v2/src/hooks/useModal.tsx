import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    activeModal: string | undefined;
    setActiveModal: (modal: any) => void;
    taskInfo: {taskId: number, taskName: string, taskDescription?: string, taskPriority?: string, taskDueDate?: Date} | undefined; // Task info is for "edit task" modal
    setTaskInfo: (taskInfo: ModalContextType["taskInfo"]) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [activeModal, setActiveModal] = useState("newTaskModal");
    const [taskInfo, setTaskInfo] = useState<ModalContextType["taskInfo"]>({
        taskId: 0,
        taskName: "",
        taskDescription: "",
        taskPriority: "",
        taskDueDate: new Date()
    });

    return (
        <ModalContext.Provider value={{ activeModal, setActiveModal, taskInfo, setTaskInfo }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}