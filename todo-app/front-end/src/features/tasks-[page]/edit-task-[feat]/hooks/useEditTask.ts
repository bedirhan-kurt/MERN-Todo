import api from "../../../../shared/api/axios";

export default function useEditTask() {
    async function editTask(token: string, taskId: string, updatedTaskData: any) {
        await api.patch(`/tasks/${taskId}`, { ...updatedTaskData }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }
    
    return {editTask}
}