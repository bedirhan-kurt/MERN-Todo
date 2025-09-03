"use client"
import { useForm } from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/components/ui/form"
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import {Tabs, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import SaveChangesButton from "./SaveChangesButton.tsx"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { createAndEditFormSchema } from "../../[page-core]/utils/formSchemas.ts";

type EditTaskDialogProps = {
    taskId: string;
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
};

export function EditTaskDialog({ taskId, name, description, priority }: EditTaskDialogProps) {
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<z.infer<typeof createAndEditFormSchema>>({
        resolver: zodResolver(createAndEditFormSchema),
        defaultValues: {
            name,
            description,
            priority,
        },
    });

    function clearForm() {
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={clearForm}>
            <DialogTrigger className='w-full' asChild>
                <Button variant='ghost' className='p-2 w-fit flex justify-start items-center' onClick={() => setIsOpen(true)}>
                    <Pencil className='size-3'></Pencil>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogDescription>
                        Update task information and save changes.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <div className="w-full h-full flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task name</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            type="text"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task description</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            type="text"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Priority Level</FormLabel>
                                    <Tabs
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        className="w-full"
                                    >
                                        <TabsList className="grid w-full grid-cols-3">
                                            <TabsTrigger value="high">High 🔴</TabsTrigger>
                                            <TabsTrigger value="medium">Medium 🟡</TabsTrigger>
                                            <TabsTrigger value="low">Low 🟢</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        </DialogClose>
                        <SaveChangesButton form={form} formSchema={createAndEditFormSchema} taskId={taskId} closeDialog={() => setIsOpen(false)}></SaveChangesButton>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    )
}