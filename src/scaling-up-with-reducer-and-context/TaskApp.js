import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import TaskProvider from "./TaskProvider.js";

export default function TaskApp() {
    return (
        <>
            <h1>Day off in Kyoto</h1>
            <TaskProvider>
                <AddTask />
                <TaskList />
            </TaskProvider>
        </>
    );
}
