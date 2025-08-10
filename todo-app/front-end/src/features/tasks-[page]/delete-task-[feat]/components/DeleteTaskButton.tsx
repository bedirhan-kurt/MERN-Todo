import { Button } from "../../../../shared/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import useDeleteTask from "../hooks/useDeleteTask";
import { toast } from "sonner";

export default function DeleteTaskButton({taskId, closeAlertDialog}: {taskId: string, closeAlertDialog: () => void}) {
    const { deleteTask } = useDeleteTask();
    const { getAccessTokenSilently } = useAuth0();

    async function handleClick() {
        try {
            const token = await getAccessTokenSilently();

            deleteTask(token, taskId);

            closeAlertDialog()
        } catch (error) {
            console.error("Error deleting task", error);
            toast.error("Failed to delete the task.");
        }
    }

    return (
        <Button variant='destructive' onClick={handleClick}>Delete</Button>
    );
}