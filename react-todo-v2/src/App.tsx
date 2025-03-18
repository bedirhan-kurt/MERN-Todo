import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import NewTaskForm from "@/components/newTaskForm.tsx";
import FunctionsForm from "@/components/functionsForm.tsx";
import TaskCard from "@/components/TaskCard.tsx";

function App() {

  return (
    <>
      <Tabs defaultValue="newTask" className="w-[400px] h-[500px]">
        <TabsList>
          <TabsTrigger className="w-48" value="newTask">New Task</TabsTrigger>
          <TabsTrigger className="w-48" value="functions">Functions</TabsTrigger>
        </TabsList>
        <TabsContent value="newTask"><NewTaskForm></NewTaskForm></TabsContent>
        <TabsContent value="functions"><FunctionsForm></FunctionsForm></TabsContent>
        <TaskCard></TaskCard>
      </Tabs>
    </>
  )
}

export default App
