import { useRef, useState } from "react"

const Card = () => {

    const [input, setInput] = useState({
        fname: "",
        message: "",
        date: "",
        rating: "",
        isLiked: false,
    });

    const [arr, setArr] = useState([]);
    const [errors, setErrors] = useState({});

    const [editIndex, setEditIndex] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);


    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setErrors({ ...errors, [e.target.id]: "" })
    }
    const handleUpdate = (index) => {
        const editObj = arr[index];
        setInput({
            fname: editObj.fname,
            message: editObj.message,
            date: editObj.date,
            rating: editObj.rating,
        });
        setEditIndex(index);
        setIsUpdate(true)
    }

    const handleDelete = (index) => {
        const afterDelete = arr.filter((data, idx) => {
            return idx != index;
        })
        setArr(afterDelete)
        setInput({ fname: "", message: "", date: "", rating: "" });
        setErrors({})
        setIsUpdate(false)
    }
    const handleLike = (index)=>{
        const updatedArr = arr.map((obj, idx)=>{
            return idx === index ? {...obj, isLiked:true} : obj;
        })
        setArr(updatedArr);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let validateErrors = {};

        if (input.fname.trim() == "") {
            validateErrors.fname = "Enter Valid Name !";
        }

        if (input.message.trim() == "") {
            validateErrors.message = "Enter Valid Review !";
        }

        if (input.date.trim() == "") {
            validateErrors.date = "Select Valid Date !";
        }
        if (input.rating === "") {
            validateErrors.rating = "select a rating!";
        }

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length == 0) {

            if (isUpdate) {
                const updatedArr = [...arr];

                updatedArr[editIndex] = {...input, isLiked:arr[editIndex].isLiked};
                setArr(updatedArr);
                setIsUpdate(false)
                setEditIndex(null);
            } else {
                setArr([...arr, {...input, isLiked: false}]);
            }

            setInput({ fname: "", message: "", date: "", rating: ""});
            setErrors({})

        }

    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="container mx-auto flex items-center h-[100vh]  justify-center">
            <div className="card-box flex gap-5 shadow-lg">
                <div className="w-6/12 p-[10px]">
                    <form className="h-full" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-1">
                            <div className="mb-4">
                                <input value={input.fname} type="text" id="fname" onChange={handleChange} className="bg-gray-200 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" />
                                {errors.fname && <p className="text-sm text-red-600">{errors.fname}</p>}
                            </div>
                            <div className="mb-4">
                                <textarea id="message" value={input.message} rows="4" onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
                                {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                            </div>
                            <div className=" flex gap-1 mb-4 bg-gray-200 p-2.5 rounded-lg">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} onClick={() => {
                                        setInput({ ...input, rating: star })
                                        setErrors({ ...errors, rating: "" });

                                    }} className="cursor-pointer text-xl">
                                        <i
                                            className={`fa-star ${star <= input.rating ? "fa-solid text-yellow-400" : "fa-regular text-gray-500"
                                                }`}
                                        ></i>
                                    </span>
                                ))}
                            </div>
                            
                            
                            {errors.rating && <p className="text-sm mb-4 text-red-600">{errors.rating}</p>}

                            <div className="relative mb-4">
                                <input id="date" onChange={handleChange} value={input.date} type="date" className="bg-gray-200 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 " placeholder="Select date" />
                                {errors.date && <p className="text-sm text-red-600 dark:text-red-500">{errors.date}</p>}
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-[#1f1f27] focus:ring-4 focus:outline-none focus:ring-[#31313c] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
                <div className="w-6/12 ">
                    <div className="show-comment  p-[10px] rounded-lg bg-[#1f1f27] w-full h-[350px] scroll-bar-width overflow-y-auto shadow-lg">
                        {arr.length == 0 ? <div className="flex items-center h-full">
                            <img src="../../public/11570242.png" width={'100%'} alt="" />
                        </div>: arr.map((data, idx) => {
                            return <div className="comment-box  px-5 py-3 mb-3 rounded-lg">
                                <div className="flex items-center mb-3 justify-between">
                                    <h3 className="text-[25px] break-all text-white font-semibold">{data.fname}</h3>
                                    <p className="text-[12px] font-semibold text-[#a4a5ab] text-end ">{formatDate(data.date)}</p>
                                </div>
                                <p className="text-md font-normal break-all text-[#a4a5ab] ">{data.message}</p>
                                <div className="flex text-yellow-400 text-[12px] py-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <i
                                            key={star}
                                            className={`fa-star ${star <= data.rating ? "fa-solid" : "fa-regular"}`}
                                        ></i>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5">
                                        <span onClick={()=>{
                                            handleLike(idx);
                                        }} className="text-lg"><i class={` text-[#a4a5ab] fa-thumbs-up ${data.isLiked ? "fa-solid text-blue-500":"fa-regular"}`}></i></span>
                                        <span className="text-lg"><i class="fa-solid text-[#a4a5ab] fa-share"></i></span>
                                    </div>
                                <div className="flex justify-end gap-5 items-center">
                                    <button className="rounded-md text-dark" onClick={() => {
                                        handleUpdate(idx)
                                    }}>
                                        <i class="fa-solid text-[#a4a5ab] fa-pen-to-square"></i>
                                    </button>
                                    <button className=" rounded-full rounded-md text-dark" onClick={() => {
                                        handleDelete(idx)
                                    }}>
                                        <i class="fa-solid text-[#a4a5ab] fa-trash"></i>
                                    </button>
                                </div>
                                </div>

                            </div>
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card