import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "./TextContext";

export default function TaskList() {
    const tasks = useContext(TaskContext);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    const dispatch = useContext(TaskDispatchContext);

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    }

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        handleChangeTask({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    handleChangeTask({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </label>
    );
}
