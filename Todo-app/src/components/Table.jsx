import { useEffect, useRef, useState } from "react";

const Table = ({ tasks, setterTask, storeStatus }) => {
    const [displayTask, setDisplayTask] = useState([]);
    const updateStatus = (id) => {
        let updatedTask = tasks.map((task) => {
            return task.id === id ? { ...task, isCompleted: true } : task;
        })
        setterTask(updatedTask);
    }
    useEffect(() => {
        let filtertask = tasks.filter((task) => {
            return storeStatus == "pending" ? !task.isCompleted : storeStatus == "completed" ? task.isCompleted : true;
        })

        setDisplayTask(filtertask)

    }, [tasks, storeStatus])
    return (
        <div>
            <div className="relative w-full mx-auto my-5 overflow-x-auto">
                <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 ">
                    </thead>
                    <tbody>
                        {displayTask.map((task) => {
                            return <tr key={task.id} className="bg-white shadow-sm border-b my-3 rounded-[10px] flex items-center">
                                <td scope="row" className="px-6 py-4 w-6/12 text-md font-mono font-semibold text-gray-900  ">
                                    {task.taskName}
                                </td>
                                {task.isCompleted ? <td className="px-6 py-4 w-6/12 text-center">
                                    <div>
                                        <button disabled className="text-green-900 rounded-md bg-emerald-100 py-1 px-7 font-medium">Completed</button>
                                    </div>

                                </td> :
                                    <td className="px-6 py-4 w-6/12 text-center">
                                        <div>
                                            <button className="text-yellow-900 bg-yellow-100 rounded-md py-1 px-7 font-medium cursor-pointer" onClick={() => {
                                                updateStatus(task.id);
                                            }}>Pending</button>
                                        </div>
                                    </td>
                                }
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table