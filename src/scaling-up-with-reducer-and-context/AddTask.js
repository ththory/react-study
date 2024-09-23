import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TextContext";

let nextId = 3;

export default function AddTask() {
    const [text, setText] = useState("");
    const dispatch = useContext(TaskDispatchContext);

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText("");
                    handleAddTask(text);
                }}
            >
                Add
            </button>
        </>
    );
}
