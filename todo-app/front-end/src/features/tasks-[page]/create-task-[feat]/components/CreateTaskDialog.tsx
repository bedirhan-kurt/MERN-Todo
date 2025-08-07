"use client"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "../../../../shared/components/ui/input.tsx";
import { Button } from "../../../../shared/components/ui/button.tsx";
import {
    Dialog, DialogClose,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "../../../../shared/components/ui/dialog.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../shared/components/ui/form.tsx";
import { Tabs, TabsList, TabsTrigger } from "../../../../shared/components/ui/tabs.tsx";
import useCreateTask from "../hooks/useCreateTask.ts"
import { useAuth0 } from "@auth0/auth0-react"

const formSchema = z.object({
    name: z.string().min(1).max(24),
    description: z.string().min(1).max(120).optional(),
    priority: z.enum(['low', 'medium', 'high']),
});

export default function CreateTaskDialog() {
    const { createTask } = useCreateTask();
    const { user, getAccessTokenSilently } = useAuth0();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            priority: "medium",
        },
    })

    function clearForm() {
        form.reset({
            name: "",
            description: "",
            priority: "medium",
        });
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (!user || !user.sub) {
                throw new Error("User ID is not available");
            }

            const token = await getAccessTokenSilently();

            createTask({ ...values, status: 'inProgress' }, user?.sub, token);

            clearForm();
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Dialog>
            <DialogTrigger className='w-full' asChild>
                <Button className='w-full'>Create New Task</Button>
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
                            <Button variant="outline" onClick={clearForm}>Cancel</Button>
                        </DialogClose>
                        <Button onClick={form.handleSubmit(onSubmit)}>Create Task</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    )
}