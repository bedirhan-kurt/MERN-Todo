import { useAuth0 } from "@auth0/auth0-react";
import useEditTask from "../hooks/useEditTask";
import {
    toast
} from "sonner"
import { Button } from "../../../../shared/components/ui/button.tsx";
import { z } from "zod";

export default function SaveChangesButton({form, formSchema, taskId, closeDialog}: {form: any, formSchema: any, taskId: string, closeDialog: () => void}) {
    const { editTask } = useEditTask();
    const { getAccessTokenSilently } = useAuth0();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const token = await getAccessTokenSilently()
            editTask(token, taskId, {...values});

            toast.success("Successfully updated task info.");

            closeDialog();
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Button onClick={form.handleSubmit(onSubmit)}>Save Changes</Button>
    );
}