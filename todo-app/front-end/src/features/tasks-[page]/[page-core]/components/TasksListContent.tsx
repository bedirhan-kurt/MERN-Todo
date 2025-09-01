import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useGetAllTasksOnce from '../../get-tasks-[feat]/hooks/useGetAllTasksOnce';
import TasksElements from '../../get-tasks-[feat]/components/TasksElements';
import NoTasks from './NoTasks';
import { useTasks } from "../context/TasksContext";

export default function TasksListContent() {
    const { getAccessTokenSilently } = useAuth0();
    const { getAllTasksOnce } = useGetAllTasksOnce();


    const {tasks, setTasks} = useTasks()
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessTokenSilently();

                const tasks = await getAllTasksOnce(accessToken);
                setTasks(tasks);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            {
                isLoading ? <div>Loading...</div> :
                    error ? <div>Error: {error.message}</div> :
                        tasks.length > 0 ? (
                            <TasksElements tasks={tasks}></TasksElements>
                        ) : (
                            <NoTasks></NoTasks>
                        )
            }
        </>

)
}