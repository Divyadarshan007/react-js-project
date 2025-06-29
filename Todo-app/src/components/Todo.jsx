import { useRef, useState } from "react";
import Table from "./Table";

const Todo = () => {
    const [text, setText] = useState("");

    const [tasks, setTasks] = useState([]);

    const [storeValue, setStoreValue] = useState("all");

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
            <div className="max-w-4xl w-full  mx-auto back-color my-10">
                <div className="flex justify-between items-center p-7">
                    <div>
                        <h1 className="text-2xl font-semibold font-mono">Todo App</h1>
                        <span className="text-sm font-medium text-gray-500">{date.toDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-[7px] py-1 px-10 font-semibold bg-white text-dark shadow-md" onClick={() => setStoreValue("all")}>All</button>
                        <button className=" rounded-[7px] py-1 px-10 font-semibold bg-white text-dark shadow-md" onClick={() => setStoreValue("pending")}>Pending</button>
                        <button className="rounded-[7px] py-1 px-10 font-semibold bg-white shadow-md text-dark" onClick={() => setStoreValue("completed")}>Completed</button>
                    </div>
                </div>
                <div className="p-7  scrollbar overflow-y-auto">
                    {tasks.length == 0 ? <div className="flex flex-col items-center justify-center">
                        <img src="/public/59563746_9318707.jpg" alt="" width={'40%'} />
                        <span className="mt-4 text-xl inline-block">No Task Yet</span>
                    </div> : <Table tasks={tasks} setterTask={setTasks} storeValue={storeValue} />}
                </div>

                <form className="p-7">
                    <div className="relative w-6/12 mx-auto">
                        <input ref={inputRef} onChange={(e) => {
                            setText(e.target.value);
                        }} id="default-search" className=" w-full p-4 pr-20  text-m text-gray-900  border-gray-300 rounded-[30px] bg-gray-50   dark:bg-black dark:placeholder-gray-400 dark:text-white" placeholder="Add Task" required />
                        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#333333] absolute end-2.5 bottom-2.5 flex items-center justify-center">
                            <button type="button" onClick={addTask} className="text-white   font-medium  text-sm px-4 py-2 "><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </form>


            </div>

        </>
    )
}


export default Todo