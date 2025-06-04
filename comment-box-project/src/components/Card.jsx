import { Datepicker } from "flowbite-react";
import { useRef, useState } from "react"

const Card = () => {


    const [input, setInput] = useState({
        fname: "",
        message: "",
        date: "",
    });

    const [arr, setArr] = useState([]);

    const [errors, setErrors] = useState({});

    const formRef = useRef(null);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setErrors({ ...errors, [e.target.id]: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validateErrors = {};

        if (input.fname.trim() == "") {
            validateErrors.name = "Enter Valid Name !";
        }

        if (input.message.trim() == "") {
            validateErrors.message = "Enter Valid Review !";
        }

        if (input.date.trim() == "") {
            validateErrors.date = "Select Valid Date !";
        }

        setErrors(validateErrors)
        
        if (Object.keys(validateErrors).length == 0) {
            setArr( [...arr, input]);
            setInput({ fname: "", message: "", date: "" });
            setErrors({})
            
        }
        
    }
    return (
        <div className="container mx-auto flex items-center h-[100vh]  justify-center">
            <div className="card-box flex gap-5 shadow-lg">
                <div className="w-6/12 p-[10px]">
                    <form className="h-full" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-1">
                            <div className="mb-4">
                                <input value={input.fname} type="text" id="fname" onChange={handleChange} className="bg-gray-200 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <textarea id="message" value={input.message} rows="4" onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                                {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                            </div>
                            <div className="mb-4 flex gap-1 bg-gray-200 p-2.5 rounded-lg">
                                <span>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-star"></i>
                                </span>
                            </div>
                            <div className="relative mb-4">
                                <input  id="date" onChange={handleChange} value={input.date} type="date" className="bg-gray-200 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 " placeholder="Select date" />
                                {errors.date && <p className="text-sm text-red-600 dark:text-red-500">{errors.date}</p>}
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-[#02b7ae] focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
                <div className="w-6/12">
                    <div className="show-comment p-[10px] rounded-lg bg-[#00b8b0] w-full h-full">
                        {arr.map((data) => {
                            return <div>
                                <h3>{data.fname}</h3>
                                <p>{data.message}</p>
                                <p>{data.date}</p>
                            </div>
                        })}
                        {/* https://dribbble.com/shots/16202712-Contact-Form-UI */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card