
import * as z from "zod"

const createAndEditFormSchema = z.object({
    name: z.string().min(1).max(20),
    description: z.string().min(1).max(30).optional(),
    priority: z.enum(['low', 'medium', 'high']),
});



export { createAndEditFormSchema };