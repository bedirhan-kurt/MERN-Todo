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
import { useState } from "react";

export default function DeleteTaskAlertDialog({taskId}: {taskId: string}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogTrigger asChild>
                <Button variant='ghost' onClick={() => setIsOpen(true)} className='p-2 w-fit flex justify-start items-center hover:bg-red-100'>
                    <Trash className='size-3'></Trash>
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
                    <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <DeleteTaskButton taskId={taskId} closeAlertDialog={() => setIsOpen(false)}></DeleteTaskButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
