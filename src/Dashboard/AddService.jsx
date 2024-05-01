import { useState } from "react";


const AddService = () => {
    const [showName, setShowName] = useState({})
    return (
        <div className='mt-20'>

            <div className="bg-white px-5 py-7 rounded-xl">
                <div className="flex gap-12 items-center">
                
                    <div className="">
                       
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold text-xl"> Service Title</span>
                               
                            </div>
                            <input type="text" placeholder="Enter Service Title" className="input input-bordered w-[520px] py-3" /> 
                          
                        </label>
                    </div>
                    <div className="mt-9">
                        <label className="flex  w-max items-end gap-4 rounded-md bg-[#FFEAF3] border-2 border-[#F63E7B] px-8 py-1 text-[#F63E7B] active:ring-4 active:ring-cyan-200" htmlFor="file">
                            <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g>
                            </svg>
                            <p className="text-lg font-medium"> {showName.name ? showName.name : 'Upload'}</p>
                        </label>
                        <input onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                const imageFile = e.target.files[0];
                                setShowName(imageFile)
                            }
                        }} className="hidden" id="file" type="file" />
                    </div>
                </div>

                <div className="">

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold text-xl"> Description</span>

                        </div>
                        <textarea type="text" placeholder="Enter Description" className="input input-bordered w-[520px] h-[150px]" />

                    </label>
                    <div className="flex justify-end">
                        <button type="submit" className="border-2 px-7 rounded-md font-semibold hover:bg-[#F63E7B] hover:text-white py-1 border-[#F63E7B]">Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddService;