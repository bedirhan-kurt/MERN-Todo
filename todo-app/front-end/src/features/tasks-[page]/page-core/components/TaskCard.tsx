import { Card, CardTitle, CardDescription } from "../../../../shared/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../shared/components/ui/select";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../../../shared/components/ui/dropdown-menu";
import {Check, EllipsisVertical, Hourglass, CircleAlert} from "lucide-react";

export default function TaskCard(
    {
        id,
        name,
        description,
        priority,
        status
    }: {
        id: string,
        name: string,
        description?: string,
        priority: string,
        status: 'completed' | 'inProgress' | 'blocked'
    }) {
    // const { deleteTodo, updateStatus } = useCreateTask();

    const borderColor = priority === "high" ? "border-l-red-500" : priority === "medium" ? "border-l-yellow-500" : priority === "low" ? "border-l-green-500" : "black";

    return (
        <Card className={`w-full h-fit flex flex-row justify-between items-center gap-4 p-3 border-l-4 ${borderColor}`}>
            <div className='w-fit flex flex-row justify-start items-center gap-4'>
                <div className='w-fit'>
                    <Select defaultValue={status} onValueChange={(value: 'inProgress' | 'completed' | 'blocked') => {
                        console.log(`Status changed to: ${value}`);
                        // updateStatus(id, value);
                    }}>
                        <SelectTrigger className='text-black'>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="inProgress"><Hourglass className={'text-black'}></Hourglass></SelectItem>
                            <SelectItem value="completed"><Check className={'text-black'}></Check></SelectItem>
                            <SelectItem value="blocked"><CircleAlert className={'text-black'}></CircleAlert></SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-fit flex-col justify-start items-center gap-4">
                    <CardTitle>{name}</CardTitle>
                    {description ? <CardDescription className="flex-wrap">{description}</CardDescription> : null}
                </div>
            </div>
            <div className="w-fit flex gap-2 p-0">
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none'><EllipsisVertical /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => {
                            console.log('testing taskCard')
                        }}>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Favorite</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { console.log(id) }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Card>
    )
}