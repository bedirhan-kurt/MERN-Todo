import {SidebarInset} from "@/components/ui/sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Progress} from "@/components/ui/progress.tsx";
import {Input} from "@/components/ui/input"
import {ArrowDownUp, Filter, Search, Trash2} from "lucide-react";
import {FunctionsDropdown} from "@/components/applicationPage/FunctionDropdown.tsx";

export default function FunctionsBar() {

    return (
        <SidebarInset>
            <header className="flex h-24 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <Button>New Task</Button>
                    <Progress value={50} className="w-100"/>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="search" placeholder="Search"/>
                        <Button size="icon">
                            <Search/>
                        </Button>
                    </div>
                    <FunctionsDropdown buttonText={<ArrowDownUp/>}
                                       options={["Latest to oldest", "Oldest to latest", "High to low pri", "Low to high pri"]}></FunctionsDropdown>
                    <FunctionsDropdown buttonText={<Filter/>}
                                       options={["Latest to oldest", "Oldest to latest", "High to low pri", "Low to high pri"]}></FunctionsDropdown>
                    <Button variant="outline" size="icon">
                        <Trash2/>
                    </Button>
                </div>
            </header>
        </SidebarInset>
    )
}