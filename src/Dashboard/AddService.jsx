import { useState } from "react";
import UseAxios from "../Hooks/Axiossecure/UseAxios";
import Swal from "sweetalert2";

const ImageApiKey = import.meta.env.VITE_API_IMAGE;
const ImageHoisting = `https://api.imgbb.com/1/upload?key=${ImageApiKey}`;
const axiosSecure =UseAxios();
const AddService = () => {
    const [showName, setShowName] = useState({})
    const handleForm =async(e) =>{
        e.preventDefault()
       const form =event.target;
       const title =form.title.value;
       const price =form.price.value;
       const discount =form.discount.value;
       const description =form.description.value;
        const formData = new FormData();
        formData.append('image', form.image.files[0]);
        try {
            const imgBBResponse = await axiosSecure.post(ImageHoisting, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Image upload response:', imgBBResponse.data);
            const allData = { name, title, price, discount, description, image: imgBBResponse.data.data.display_url };
            const res = await axiosSecure.post('/ServiceItem', allData);
            console.log('Form submission response:', res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully submitted Services',
                });
            }

        } 
        catch (error) {
            console.error('Error submitting the form:', error);
        }
    
    }
    return (
        <div className='mt-20'>

            <div className="bg-white px-5 py-7 rounded-xl">
                <form onSubmit={handleForm}>


                    <div className="flex gap-12 items-center">

                        <div className="">

                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-semibold text-xl"> Service Title</span>

                                </div>
                                <input name="title" type="text" placeholder="Enter Service Title" className="input input-bordered w-[520px] py-3" />

                            </label>
                            <div className="flex gap-5 items-center justify-center">

                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text font-semibold text-xl"> Price</span>

                                    </div>
                                    <input name="price" type="number" placeholder="Price" className="input input-bordered w-[170px] py-3" />

                                </label>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text font-semibold text-xl"> Discount</span>

                                    </div>
                                    <input name="discount" type="number" placeholder="Discount" className="input input-bordered w-[170px] py-3" />

                                </label>

                                <div className="mt-10">
                                    <label className="flex  w-max items-end gap-4 rounded-md bg-[#FFEAF3] border-2 border-[#F63E7B] px-8 py-1 text-[#F63E7B] active:ring-4 active:ring-cyan-200" htmlFor="file">
                                        <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g>
                                        </svg>
                                        <p className="text-lg font-medium"> {showName.name ? showName.name : 'Upload'}</p>
                                    </label>
                                    <input name="image" onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const imageFile = e.target.files[0];
                                            setShowName(imageFile)
                                        }
                                    }} className="hidden" id="file" type="file" />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="">

                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold text-xl"> Description</span>

                            </div>
                            <textarea name="description" type="text" placeholder="Enter Description" className="input input-bordered w-[520px] h-[150px]" />

                        </label>
                        <div className="flex justify-end">
                            <button type="submit" className="border-2 px-11 rounded-md font-semibold hover:bg-[#F63E7B] hover:text-white py-2 border-[#F63E7B]">Submit</button>
                        </div>
                    </div>



                </form>
            </div>
            
        </div>
    );
};

export default AddService;