import image from '../../../public/Group 1372.png'
import image2 from '../../../public/Group 1373.png'
import image3 from '../../../public/Group 1374.png'
import './Services.css'
const Services = () => {
    return (
        <div className="mt-28 max-w-screen-2xl mx-auto ">
            <div>
                <h1 className="text-center font-bold text-5xl font-serif">Our Awesome <span className="text-[#F63E7B]">Services</span></h1>
                <div className="divider divider-error w-[250px] mx-auto"></div>
                <div className='grid px-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-12'>
                    <div className=" mx-auto space-y-6 rounded-2xl border  px-6 py-4 hover:shadow-2xl hover:border-2  dark:bg-[#18181B] ">
                        <img className='w-32 mx-auto' src={image2} alt="" />
                        <div className="space-y-2">
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl text-center dark:text-white/90">Anti Age Face Treatment</h2>
                            <h1 className='text-center font-bold text-[#F63E7B]'>$199</h1>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <p className='text-center text-gray-400'>We offer a full range of relaxing skin care services, including all types of facials</p>
                        </div>
                    </div>

                    <div className="mx-auto  space-y-6 border-t-2 border-pink-300 rounded-2xl px-6 py-4 shadow-xl dark:bg-[#18181B] relative">
                        <img className="w-32 mx-auto" src={image} alt="" />
                        <div className="space-y-2">
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl text-center dark:text-white/90">Hair Color & Styleing</h2>
                            <h1 className="text-center font-bold text-[#F63E7B]">$199</h1>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <p className="text-center">Improve your look with our professional haircut & hairstyling services.</p>
                        </div>
                        <div className="blob"></div>
                    </div>

                    <div className="card mx-auto space-y-6 rounded-2xl border px-6 py-4 hover:shadow-2xl hover:border-2  dark:bg-[#18181B] ">
                        <img className='w-32 mx-auto' src={image3} alt="" />
                        <div className="space-y-2 bg">
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl text-center dark:text-white/90">Skin Care Treatment</h2>
                            <h1 className='text-center font-bold text-[#F63E7B]'>$199</h1>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <p className='text-center text-gray-400'>Pamper yourself with our manicure & pedicure services that will bring sensational results.</p>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button className="bg-[#F63E7B] text-white px-7 py-1 rounded-md">About more</button>
                </div>

            </div>


        </div>

    );
};

export default Services;