import { useRef, useState } from "react";
import Table from "./Table";
import PendingTaskTable from "./pendingTaskTable";
import CompletedTaskTable from "./completedTaskTable";

const Todo = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [storeStatus, setStoreStatus] = useState("");
    const inputRef = useRef(null);

    const addTask = () => {
        if (text.trim() == "") {
            return;
        }
        const newTask = {
            id: Date.now(),
            taskName: text,
            isCompleted: false,
        }

        setTasks([...tasks, newTask]);
        inputRef.current.value = "";
        setText("")
    }

    const showPending = () => {
        let pendingTask = tasks.filter((task) => {
            return !task.isCompleted
        })
        setPendingTasks(pendingTask);
    }
    return (
        <>
            <h1 className="text-center font-bold text-3xl my-5">Todo App</h1>
            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input ref={inputRef} onChange={(e) => {
                        setText(e.target.value);
                    }} type="search" id="default-search" className="block w-full p-4 text-m text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Add Task" required />
                    <button type="button" onClick={addTask} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Add Task</button>
                </div>
            </form>
            <div className="mx-auto max-w-md my-5 flex gap-2">
                <button className="border py-1 px-10 font-semibold bg-teal-500 text-white rounded-md" onClick={(e) => {
                    setStoreStatus("all");
                }}>All</button>
                <button className="border py-1 px-10 font-semibold bg-teal-500 text-white rounded-md" onClick={(e) => {
                    setStoreStatus("pending")
                }}>Pending</button>
                <button className="border py-1 px-10 font-semibold bg-teal-500 text-white rounded-md" onClick={(e) => {
                    setStoreStatus("completed")
                }}>Completed</button>
            </div>
            <Table tasks={tasks} setterTask={setTasks} />
        </>
    )
}

export default Todo