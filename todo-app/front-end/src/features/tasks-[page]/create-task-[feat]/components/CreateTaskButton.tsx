import { useAuth0 } from "@auth0/auth0-react";
import useCreateTask from "../hooks/useCreateTask";
import {
    toast
} from "sonner"
import { Button } from "../../../../shared/components/ui/button.tsx";
import { z } from "zod";

export default function CreateTaskButton({form, formSchema, closeDialog}: {form: any, formSchema: any, closeDialog: () => void}) {
    const { createTask } = useCreateTask();
    const { user, getAccessTokenSilently } = useAuth0();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (!user || !user.sub) {
                throw new Error("User ID is not available");
            }

            const token = await getAccessTokenSilently();

            createTask({ ...values, status: 'inProgress' }, user?.sub, token)

            closeDialog();
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Button onClick={form.handleSubmit(onSubmit)}>Create Task</Button>
    );
}