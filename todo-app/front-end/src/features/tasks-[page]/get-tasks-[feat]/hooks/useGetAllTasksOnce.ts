import api from "../../../../shared/api/axios";

export default function useGetAllTasksOnce() {
    async function getAllTasksOnce(token: string) {
        try {
            const res = await api.get('/tasks', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            return(res.data.tasks);
        } catch (err) {
            console.error("Error fetching tasks:", err);
            return (err as Error);
        }
    }

    return {
        getAllTasksOnce,
    };
}
