import { useState } from "react";


const BlogModal = () => {
    const [openModal, setOpenModal] = useState(false);

        // const handleSubmit =(e) =>{
        //     e.preventDeafault()
        //     const email =e
        // }


    return (
        <div>
            <div className="mx-auto w-fit">
                <button onClick={() => setOpenModal(true)} className="rounded-md bg-[#F63E7B] px-5 py-[6px] text-white">
                    Write Blog
                </button>
                <div
                    onClick={() => setOpenModal(false)}
                    className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
                >
                    <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md rounded-lg bg-[#Faeae3] p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>

                        <h1 className="text-2xl font-bold text-center uppercase text-[#F63E7B] ">Write Your blog here</h1>

                        <div className="mt-5  ">
                            <form>
                                <input name="email" placeholder="Enter Your Email" className="rounded-lg mb-6 border border-gray-400 bg-transparent px-3 w-[390px] py-2 font-bold ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="email" />
                                <input name="date" placeholder="Enter Date" className="rounded-lg mb-6 border border-gray-400 bg-transparent px-3 w-[390px] py-2 font-bold ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="date" />
                                <input  name="head" placeholder="Enter Blog Headline" className="rounded-lg mb-6 border border-gray-400 bg-transparent px-3 w-[390px] py-2 font-bold ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                                <textarea name="details" rows={5} placeholder="Enter Blog details" className="rounded-lg mb-6 border border-gray-400 bg-transparent px-3 w-[390px] py-2 font-bold ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text" />
                            </form>
                        </div>



                        <div className="flex justify-end gap-5">

                            <button type="submit" className="px-6 py-[6px] rounded-md hover:bg-[#e87198] bg-[#F63E7B] text-white">Submit</button>
                          
                            <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;