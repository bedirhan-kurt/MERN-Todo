import { AlertDialog, AlertDialogTrigger, AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction, } from "../../../../shared/components/ui/alert-dialog";
import {Button} from "../../../../shared/components/ui/button";
import { Trash } from "lucide-react";
import DeleteTaskButton from "./DeleteTaskButton";

export default function DeleteTaskAlertDialog({taskId}: {taskId: string}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='ghost' className='p-2 w-full flex justify-start items-center'>
                    <Trash className='size-3'></Trash>
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent >
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        task.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <DeleteTaskButton taskId={taskId}></DeleteTaskButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
