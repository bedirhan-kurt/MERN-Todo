export default function DeleteConfirmation(props) {
    return (
        <div className="p-4 flex flex-col gap-6 justify-center items-start bg-white border border-border rounded-lg shadow-sm">
            <div className={"flex flex-col gap-2"}>
                <h1 className={"text-xl font-semibold"}>Delete Task</h1>
                <p className={"text-sm "}>You are deleting a task. Do you confirm it?</p>
            </div>
            <div className={"w-full flex justify-end "}>
                <button className={"w-20 h-10 text-sm p-2 bg-white rounded-lg text-black"}>Cancel</button>
                <button onClick={() => props.handleDeleteConfirmed(props.key)} className={"w-20 h-10 text-sm bg-black rounded-lg text-white"}>Confirm</button>
            </div>
        </div>
    )
}