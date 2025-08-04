import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/ui/tabs.tsx";
import FiltersDialog from "@/features/tasks-[page]/filter-tasks-[feat]/components/FiltersDialog.tsx";
import TodoList from "@/features/tasks-[page]/get-tasks-[feat]/components/TodoList.tsx";
import {TodoProvider} from "@/features/tasks-[page]/create-task-[feat]/hooks/useCreateTask.tsx";
import {ModalProvider} from "@/hooks/useModal.tsx";
import {ActiveModal} from "@/shared/components/ActiveModal.tsx";
import ProgressBar from "@/features/tasks-[page]/progress-bar-[feat]/components/ProgressBar.tsx";

function App() {
    return (
        <ModalProvider>
            <TodoProvider>
                <Tabs defaultValue="tasks" className="w-[400px] h-[500px]">
                    <TabsList>
                        <TabsTrigger className="w-48" value="tasks">New Task</TabsTrigger>
                        <TabsTrigger className="w-48" value="functions">Functions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tasks">
                        <div className="flex flex-col gap-6">
                            <ActiveModal />
                            <ProgressBar></ProgressBar>
                        </div>
                    </TabsContent>
                    <TabsContent value="functions"><FiltersDialog/></TabsContent>
                    <TodoList/>
                </Tabs>
            </TodoProvider>
        </ModalProvider>
    );
}

export default App;