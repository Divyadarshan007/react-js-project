import { useRef, useState } from "react";
import Table from "./Table";

const Todo = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [storeStatus, setStoreStatus] = useState("all");
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
    const [date, setDate] = useState(new Date())
    return (
        <>
            <div className="max-w-4xl mx-auto back-color my-10">
                <div className="flex justify-between items-center p-7">
                    <div>
                        <h1 className="text-2xl font-semibold font-mono">Todo App</h1>
                        <span className="text-sm font-medium text-gray-500">{date.toDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-[7px] py-1 px-10 font-semibold bg-white text-dark shadow-md" onClick={() => setStoreStatus("all")}>All</button>
                        <button className=" rounded-[7px] py-1 px-10 font-semibold bg-white text-dark shadow-md" onClick={() => setStoreStatus("pending")}>Pending</button>
                        <button className="rounded-[7px] py-1 px-10 font-semibold bg-white shadow-md text-dark" onClick={() => setStoreStatus("completed")}>Completed</button>
                    </div>
                </div>
                <div className="p-7">
                    <Table tasks={tasks} setterTask={setTasks} storeStatus={storeStatus} />

                </div>

            <form className="p-7">
                <div className="relative">
                    <input ref={inputRef} onChange={(e) => {
                        setText(e.target.value);
                    }} type="search" id="default-search" className=" w-full p-4 pr-20  text-m text-gray-900  border-gray-300 rounded-lg bg-gray-50   dark:bg-black dark:placeholder-gray-400 dark:text-white" placeholder="Add Task" required />
                    <div className="w-[40px] h-[40px] rounded-[50%] inline-block">
                        <button type="button" onClick={addTask} className="text-white absolute end-2.5 bottom-2.5  font-medium  text-sm px-4 py-2 bg-[#333333]">Add</button>
                    </div>
                </div>
            </form>


            </div>

        </>
    )
}


export default Todo