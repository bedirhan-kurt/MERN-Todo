import {PackageOpen} from "lucide-react";

export default function NoTasks() {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <PackageOpen className='size-14'></PackageOpen>
            <p>You don't have any tasks yet.</p>
        </div>
    )
}