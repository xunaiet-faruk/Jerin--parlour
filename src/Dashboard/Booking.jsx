import { Link } from 'react-router-dom';
import image from '../../public/Group 1372.png'
import Loading from '../Component/Loading';
import UseServices from '../Hooks/Axiossecure/UseServices';

const Booking = () => {
    const [, services, isLoading] = UseServices();

    if (isLoading) {
        return <div><Loading/></div>;
    }

    return (
        <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 '>
            {services.length === 0 ? (
                <div className='flex justify-center  items-center h-screen'>
                    <Link to={'/service'}>
                        <img className='ml-[350px] animate-pulse' src="https://i.ibb.co/Vt2xDcb/image-removebg-preview-77.png" alt="No services" />

                </Link>
                </div>
            ) : (
                services.map((item, index) => {
                    const status = item.status || 'Pending';
                    return (
                        <div key={index} className=''>
                            <div className="bg-white shadow-xl h-[260px] rounded-xl px-5 space-y-3">
                                <div className="flex justify-between mt-2 relative">
                                    <div className=''>
                                        <img className="w-[70px] animate-pulse absolute shadow-gray-200  shadow-xl  bottom-1 -ml-6 h-[70px]  object-cover rounded-full " src={item?.image} alt="" />
                                    </div>
                                    <div className="mt-4">
                                        <p className={`bg-pink-100 font-bold text-pink-400 px-6 py-2 rounded-md ${status === 'Pending' ? 'bg-yellow-100 text-yellow-500' : status === 'Done' ? 'bg-green-100 text-green-500' : 'bg-blue-100 text-blue-500'}`}>
                                            {status}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[20px] font-bold px-2">{item.title}</p>
                                <p className="text-[#606268] px-2">{item.description}</p>
                                
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Booking;
