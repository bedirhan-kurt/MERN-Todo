// import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "front-end/src/shared/components/ui/card";
// import {useCreateTask} from "../../tasks-[page]/get-tasks-[feat]/hooks/useGetTasks.tsx";
// import {EllipsisVertical, Timer} from "lucide-react";
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../../shared/components/ui/select.tsx";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger
// } from "../../../shared/components/ui/dropdown-menu.tsx";
//
//
// export default function TaskCard({taskId, taskName, taskDescription, taskPriority, taskDueDate}: {taskId: number, taskName: string, taskDescription?: string, taskPriority?: string, taskDueDate?: Date}) {
//     const {deleteTodo, updateStatus} = useCreateTask();
//
//     const priorityEmoji = taskPriority === "high" ? "🔴" : taskPriority === "medium" ? "🟡" : taskPriority === "medium" ? "🟢" : null;
//
//     return (
//         <Card className=" flex flex-col gap-4 p-4">
//             <CardHeader className="flex flex-col gap-4 p-0">
//                 <div className="w-full flex justify-between">
//                     <CardTitle>{priorityEmoji} {taskName}</CardTitle>
//                     <span className="flex gap-1 items-center text-xs">
//                         <Timer className="size-[14px]"/>
//                         {taskDueDate ? taskDueDate.toLocaleDateString("tr-TR") : null}
//                     </span>
//                 </div>
//                 {taskDescription ? <CardDescription className="flex-wrap">{taskDescription}</CardDescription> : null}
//             </CardHeader>
//             <CardContent className="flex gap-2 p-0">
//                 <Select defaultValue={"in_progress"} onValueChange={(value) => updateStatus(taskId, value)}>
//                         <SelectTrigger className="w-full">
//                             <SelectValue placeholder="Select priority lvl"/>
//                         </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="in_progress">In progress</SelectItem>
//                         <SelectItem value="completed">Completed</SelectItem>
//                         <SelectItem value="issue_detected">Issue detected</SelectItem>
//                     </SelectContent>
//                 </Select>
//                 <DropdownMenu>
//                     <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem onClick={() => {
//                             console.log('testing taskCard')
//                         }}>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Favorite</DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => {deleteTodo(taskId)}}>Delete</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </CardContent>
//         </Card>
//     )
// }