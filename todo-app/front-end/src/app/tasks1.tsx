import { useEffect, useState } from "react";
import { z } from "zod";
import { taskSchema } from "../features/tasks-[page]/[page-core]/data/schema";
import { UserNav } from "../features/tasks-[page]/[page-core]/components/user-nav";
import { DataTable } from "../features/tasks-[page]/[page-core]/components/data-table";
import { columns } from "../features/tasks-[page]/[page-core]/components/columns";

// typescript kullanıyorsan:
type Task = z.infer<typeof taskSchema>;

export default function TaskPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchTasks() {
            try {
                const res = await fetch("/data/tasks.json");
                if (!res.ok) throw new Error("Network response was not ok");
                const json = await res.json();

                const validated = z.array(taskSchema).parse(json);
                setTasks(validated);
            } catch (err) {
                console.error("Veri alma ya da doğrulama hatası:", err);
                setError("Görevler yüklenemedi.");
            }
        }

        fetchTasks();
    }, []);

    return (
        <div className="h-full flex-1 flex-col gap-8 p-8 md:flex">
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold tracking-tight">Welcome back!</h2>
                    <p className="text-muted-foreground">Here's a list of your tasks for this month.</p>
                </div>
                <div className="flex items-center gap-2">
                    <UserNav />
                </div>
            </div>

            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <DataTable data={tasks} columns={columns} />
            )}
        </div>
    );
}
