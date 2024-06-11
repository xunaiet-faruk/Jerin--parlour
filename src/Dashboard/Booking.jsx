import image from '../../public/Group 1372.png'
import UseServices from '../Hooks/Axiossecure/UseServices';
const Booking = () => {
    const [,services] =UseServices()
    return (
        <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
            
          {
                services.map((item, index) => <div key={index} className=''>
                    <div className="bg-white shadow-xl h-[280px] rounded-xl px-5 space-y-3">
                        <div className="flex justify-between mt-2">
                            <div>
                                <img className="w-20 py-3" src={image} alt="" />
                            </div>
                            <div className="mt-4">
                                <p className="bg-pink-100 font-bold text-pink-400 px-6 py-2 rounded-md">Pending</p>
                            </div>
                        </div>

                        <p className="text-[20px] font-bold px-2">Hellow i am junaiet faruk who are you </p>
                        <p className="text-[#606268] px-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                    </div>
                </div>)
          }
        </div>
    );
};

export default Booking;