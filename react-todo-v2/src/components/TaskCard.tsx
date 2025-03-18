import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Check, Timer} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

export default function TaskCard({taskName, taskDescription, taskPriority, taskDueDate}: {taskName: string, taskDescription: string, taskPriority: string, taskDueDate: string}) {
    const priorityEmoji = taskPriority === "high" ? "🔴" : taskPriority === "medium" ? "🟡" : "🟢";

    return (
        <Card className="w-[400px] h-[500px] flex flex-col gap-4">
            <CardHeader className="flex flex-col gap-4">
                <div className="w-full flex justify-between">
                    <CardTitle>{priorityEmoji} {taskName}</CardTitle>
                    <span className="flex gap-1 items-center text-xs"><Timer className="size-[14px]" /> {taskDueDate}</span>
                </div>
                {taskDescription ? <CardDescription className="flex-wrap">{taskDescription}</CardDescription>: null}
            </CardHeader>
            <CardContent className="flex gap-2">
                <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select priority lvl"/>
                        </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="high">In progress</SelectItem>
                        <SelectItem value="medium">Completed</SelectItem>
                        <SelectItem value="low">Issue detected</SelectItem>
                    </SelectContent>
                </Select>
                <Badge className="w-10 h-full"><Check className="size-[14px]"></Check></Badge>
            </CardContent>
        </Card>
    )
}