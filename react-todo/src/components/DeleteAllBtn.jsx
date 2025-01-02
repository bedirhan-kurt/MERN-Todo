import React from "react";

export default function DeleteAllBtn(props) {
    return (
        <button
            onClick={props.handleDeleteAll}
            className={"w-full py-2 bg-white text-black border border-border rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200"}
        >
            Delete All
        </button>
    )
}