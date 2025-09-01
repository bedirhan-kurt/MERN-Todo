import api from "../../../../shared/api/axios";
import { Task } from "../../[page-core]/utils/TaskType";

export default function useCreateTask() {
    const createTask = async (taskData: Task, userId: string, token: string) => {
        try {
            await api.post('/tasks', { userId, ...taskData }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {console.log(res)})
                .catch((err) => console.error(err));
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };


    return { createTask };
}
