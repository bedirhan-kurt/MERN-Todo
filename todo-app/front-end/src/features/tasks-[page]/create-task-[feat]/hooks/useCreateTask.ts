import api from "../../../../shared/api/axios";

interface Todo {
    name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    status: 'inProgress';
}

export default function useCreateTask() {
    const createTask = async (taskData: Todo, userId: string, token: string) => {
        try {
            await api.post('/tasks', { userId, ...taskData }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };


    return { createTask };
}
