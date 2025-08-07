import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../shared/components/ui/card.tsx";
import { Separator } from "../shared/components/ui/separator.tsx";
import NoTasks from "../features/tasks-[page]/[page-core]/components/NoTasks.tsx";
import CreateTaskDialog from "../features/tasks-[page]/create-task-[feat]/components/CreateTaskDialog.tsx";


export default function TasksPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
            <Card className='w-2/7 h-2/3'>
                <CardHeader>
                    <CardTitle className='scroll-m-20 text-xl font-semibold tracking-tight'>Tasks</CardTitle>
                    <Separator className='mt-1'></Separator>
                </CardHeader>
                <CardContent className='w-full h-full flex items-center justify-center'>
                    <NoTasks></NoTasks>
                </CardContent>
                <CardFooter>
                    <CreateTaskDialog></CreateTaskDialog>
                </CardFooter>
            </Card>
        </div>
    );
}