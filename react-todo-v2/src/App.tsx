import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import FunctionsForm from "@/components/FunctionsForm.tsx";
import TodoList from "@/components/TodoList.tsx";
import {TodoProvider} from "@/hooks/useTodo.tsx";
import {ModalProvider} from "@/hooks/useModal.tsx";
import {ActiveModal} from "@/components/ActiveModal.tsx";
import ProgressBar from "@/components/ProgressBar.tsx";

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
                    <TabsContent value="functions"><FunctionsForm/></TabsContent>
                    <TodoList/>
                </Tabs>
            </TodoProvider>
        </ModalProvider>
    );
}

export default App;