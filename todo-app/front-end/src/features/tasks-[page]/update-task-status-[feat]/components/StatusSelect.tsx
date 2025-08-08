import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../shared/components/ui/select";
import {Check, Hourglass, CircleAlert} from "lucide-react";
import useUpdateTaskStatus from "../hooks/useUpdateTaskStatus";
import { useAuth0 } from "@auth0/auth0-react";

export default function StatusSelect({taskId, status}: {taskId: string, status: 'inProgress' | 'completed' | 'blocked'}) {
    const {updateStatus} = useUpdateTaskStatus();
    const { getAccessTokenSilently } = useAuth0();

    return (
        <Select defaultValue={status} onValueChange={async (newStatus: 'inProgress' | 'completed' | 'blocked') => {
            const token = await getAccessTokenSilently();

            updateStatus(token, taskId, newStatus)
        }}>
            <SelectTrigger className='text-black'>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="inProgress"><Hourglass className={'text-black'}></Hourglass></SelectItem>
                <SelectItem value="completed"><Check className={'text-black'}></Check></SelectItem>
                <SelectItem value="blocked"><CircleAlert className={'text-black'}></CircleAlert></SelectItem>
            </SelectContent>
        </Select>
    )
}