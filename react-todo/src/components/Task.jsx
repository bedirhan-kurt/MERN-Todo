export default function Task(props) {
    const bgColor = props.priority === "High" ? "bg-rose-300" : props.priority === "Medium" ? "bg-amber-300" : "bg-emerald-300";
    const textColor = props.priority === "High" ? "text-rose-800" : props.priority === "Medium" ? "text-amber-800" : "text-emerald-800";

    return (
        <div className="w-full px-4 py-6 flex justify-between bg- items-center gap-4 border border-border rounded-xl shadow-md">
            <div className={"flex items-center gap-4"}>
                <input type="checkbox" className={"size-5 accent-black"} onChange={() => props.handleStatusChange(props.id, !props.status)}/>
                <p className={`text-lg ${props.status ? "line-through" : null}`}>{props.name}</p>
            </div>
            <div className={"flex items-center gap-4"}>
                <span className={`${bgColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>{props.priority}</span>
                <button onClick={() => props.handleDelete(props.id)}><i className="text-black ri-delete-bin-6-fill"></i></button>
            </div>
        </div>
    )
}