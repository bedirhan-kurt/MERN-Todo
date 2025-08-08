import api from "../../../../shared/api/axios";

export default function useUpdateTaskStatus() {
    async function updateStatus(token: string, taskId: string, newStatus: 'inProgress' | 'completed' | 'blocked') {
        console.log(`/tasks/${taskId}/status`)
        try {
            const res = await api.patch(`/tasks/${taskId}/status`, {newStatus: newStatus}, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            return(res);
        } catch (err) {
            console.error("Error fetching tasks:", err);
            return (err as Error);
        }
    }

    return { updateStatus };
}