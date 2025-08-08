import api from "../../../../shared/api/axios";

export default function useDeleteTask() {
    const deleteTask = async (token: string, taskId: string) => {
        await api.delete(`/tasks/${taskId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };


    return { deleteTask };
}
