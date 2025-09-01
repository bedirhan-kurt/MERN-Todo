type Task = {
    name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    status: 'inProgress';
}

export type { Task };