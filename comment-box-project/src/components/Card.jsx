import { Datepicker } from "flowbite-react";

const Card = () => {
    return (
        <div className="container mx-auto flex items-center h-[100vh]  justify-center">
            <div className="card-box flex gap-5 shadow-lg">
                <div className="w-6/12">
                    <form>
                        <div class="grid md:grid-cols-1">
                            <div className="mb-4">
                                <input type="text" id="first_name" class="bg-gray-50 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                            </div>
                            <div class="mb-4">
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <div class="mb-4">
                                <select id="countries" class="bg-gray-50 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected>Give Ratings</option>
                                    <option value="US">1</option>
                                    <option value="CA">2</option>
                                    <option value="FR">3</option>
                                    <option value="DE">4</option>
                                </select>
                            </div>

                            <div class="relative mb-4">
                                <input datepicker id="default-datepicker" type="date" class="bg-gray-50 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 " placeholder="Select date" />
                            </div>
                        </div>
                        <button type="submit" class="text-white bg-[#02b7ae]  focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
                <div className="w-6/12">
                    <div className="show-comment p-[10px] bg-[#00b8b0] w-full h-full">
                        lsndksdni
                        {/* https://dribbble.com/shots/16202712-Contact-Form-UI */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card