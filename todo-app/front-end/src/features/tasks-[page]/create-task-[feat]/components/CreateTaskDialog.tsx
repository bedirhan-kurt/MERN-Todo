"use client"
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import CreateTaskButton from "./CreateTaskButton";
import { useState } from "react";
import { createAndEditFormSchema } from "../../[page-core]/utils/formSchemas.ts";
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"

export default function CreateTaskDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<z.infer<typeof createAndEditFormSchema>>({
        resolver: zodResolver(createAndEditFormSchema),
        defaultValues: {
            name: "",
            description: "",
            priority: "medium",
        },
    })

    function clearForm() {
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={clearForm}>
            <DialogTrigger className='w-full' asChild>
                <Button className='w-full' onClick={() => setIsOpen(true)}>Create New Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                    <DialogDescription>
                        Add a new task to your todo list.
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
                                            placeholder="Check e-mails"
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
                                            placeholder="Read all e-mails and reply important ones."
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
                        <CreateTaskButton form={form} formSchema={createAndEditFormSchema} closeDialog={() => setIsOpen(false)}></CreateTaskButton>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    )
}