const PendingTaskTable = ({pendingArr, tasks, setterTask}) => {
     const updateStatus = (id) => {
        let updatedTask = pendingArr.map((task) => {
            return task.id === id ? { ...task, isCompleted: true } : task;
        })
        setterTask(updatedTask);
    }
    
    console.log(pendingArr);
    
    return (
        <div>
            <div className="relative w-6/12 mx-auto my-5 overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3">
                                What's your Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingArr.map((task) => {
                            return <tr key={task.id} className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.taskName}
                                </th>
                                {task.isCompleted ? <td className="px-6 py-4">
                                    <div className="">
                                        <p className="text-green-700">Task Completed</p>
                                    </div>
                                </td> : <div className=" px-6 py-4 items-center">
                                    <p className="text-blue-700 cursor-pointer" onClick={() => {
                                        updateStatus(task.id);
                                    }}>Mark as completed</p>
                                </div>}
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingTaskTable