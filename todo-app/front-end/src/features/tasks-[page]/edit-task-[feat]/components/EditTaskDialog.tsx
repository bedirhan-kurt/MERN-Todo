"use client"
import {
    toast
} from "sonner"
import {
    Form,
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    format
} from "date-fns"
import {
    Calendar as CalendarIcon
} from "lucide-react"
import {Card, CardContent} from "front-end/src/shared/components/ui/card.tsx"
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "front-end/src/shared/components/ui/form.tsx"
import {Input} from "../../../../shared/components/ui/input.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../../../shared/components/ui/select.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "../../../../shared/components/ui/popover.tsx";
import {Button} from "../../../../shared/components/ui/button.tsx";
import {cn} from "../../../../shared/lib/utils.ts";
import {Calendar} from "../../../../shared/components/ui/calendar.tsx";
import {useEditTask} from "../hooks/useEditTask.tsx";

const formSchema = z.object({
    taskName: z.string().min(1).max(24),
    taskDescription: z.string().min(1).max(120).optional(),
    taskPriority: z.string(),
    taskDueDate: z.coerce.date().optional()
})

export function EditTaskDialog({...taskInfo}: {
    taskId: number;
    taskName: string;
    taskDescription?: string;
    taskPriority?: string;
    taskDueDate?: Date;
    taskStatus?: string;

}) {
    const { updateTodo } = useEditTask();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            taskName: taskInfo?.taskName,
            taskDescription: taskInfo?.taskDescription,
            taskPriority: taskInfo?.taskPriority,
            taskDueDate: taskInfo?.taskDueDate
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            updateTodo(taskInfo.taskId, values.taskName, values.taskDescription, values.taskPriority, values.taskDueDate);
            toast.success("Task updated successfully");
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Card className="-py-2 w-full max-w-3xl mx-auto">
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto py-10">
                        <FormField
                            control={form.control}
                            name="taskName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Task name</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            placeholder="Check e-mails"
                                            type="text"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="taskDescription"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Task description</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            placeholder="Read all e-mails and reply important ones."

                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="w-full flex gap-6">
                            <div className="w-1/2">
                                <FormField
                                    control={form.control}
                                    name="taskPriority"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Priority</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select priority lvl"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="high">High 🔴</SelectItem>
                                                    <SelectItem value="medium">Medium 🟡</SelectItem>
                                                    <SelectItem value="low">Low 🟢</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-1/2">
                                <FormField
                                    control={form.control}
                                    name="taskDueDate"
                                    render={({field}) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Due date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="flex w-full justify-end gap-4">
                            <Button type="button" onClick={() => {console.log('test')}} variant="outline" className="w-24">Cancel</Button>
                            <Button type="submit" className="w-24">Save</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}