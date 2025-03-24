import {useModal} from "@/hooks/useModal.tsx";
import NewTaskForm from "@/components/NewTaskForm.tsx";
import {EditTaskForm} from "@/components/EditTaskForm.tsx";

export function ActiveModal(): React.ReactNode {
    const {activeModal} = useModal();
    const modal = activeModal === "newTaskModal" ? <NewTaskForm/> : activeModal === "editModal" ? <EditTaskForm/> : null;

    return (
        <div>
            {modal}
        </div>
    );
}